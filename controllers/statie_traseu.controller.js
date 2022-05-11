const db = require("../models");
const statie_traseu = db.statii_rute;
const rute = db.rute;
const statii = db.statii;


exports.create = async (req, res) => {
  try {
  	const already_exist = await statie_traseu.findOne({ where: {
          routeId: req.body.routeId,
          stationId: req.body.stationId
     } });

	if(already_exist)
	{
		res.status(409).json({ message: 'This pair already exist!' });
		return;
	}
	
	statie_traseu.create({
		routeId: req.body.routeId,
		stationId: req.body.stationId
	});

	res.status(200).json();


  }
  catch(err) {
	res.status(500).send({ message: err.message });
  
  }
};


exports.findAll = async (req, res) => {
	try {
    const final_list = [];
    const routes = await rute.findAll({ attributes: ['id','name']});

    const stations_with_route = await statie_traseu.findAll({
      include: {
        model: statii,
        attributes: ['name',['latitude','lat'],['longitude','lng']]
      },
      attributes: ['routeId']
    });

    routes.forEach(route => {
      const stations_list = stations_with_route.filter(station => station.routeId === route.id).map(station => station.station);
      final_list.push({'name': route.name, 'stops': stations_list});
    });
    res.status(200).send(final_list);
  }
	catch(err) {
	  res.status(500).send({ message: err.message });
	
	}
};