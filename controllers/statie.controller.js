const db = require("../models");
const Statie = db.statii;

exports.create = async (req, res) => {
    try {
        const already_exist = await Statie.findOne({ where: { name: req.body.name } });
  
      if(already_exist)
      {
          res.status(409).json({ message: 'This station already exist!' });
          return;
      }

      Statie.create({
          name: req.body.name,
          latitude: req.body.latitude,
          longitude: req.body.longitude
      });
  
      res.status(200).json();
    }
    catch(err) {
      res.status(500).send({ message: err.message });
    
    }
  };

exports.findAll = async (req, res) => {
	try {
		Statie.findAll().then(stations => {
			res.status(200).send(stations);
		})
		.catch(err => {
			res.status(500).send({message: err.message});
		})
    }
	catch(err) {
	  res.status(500).send({ message: err.message });
	
	}
};

exports.deleteById = async (req,res) => {
  try {
    const id = req.params.id;
		Statie.destroy({where : {id: id}}).then(stations => {
			res.status(200).json();
		})
		.catch(err => {
			res.status(500).send({message: err.message});
		})
    }
	catch(err) {
	  res.status(500).send({ message: err.message });
	
	}
};