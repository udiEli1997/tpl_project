const db = require("../models");
const Traseu = db.rute;

exports.create = async (req, res) => {
    try {
        const already_exist = await Traseu.findOne({ where: { name: req.body.name } });
  
      if(already_exist)
      {
          res.status(409).json({ message: 'This route already exist!' });
          return;
      }

      Traseu.create({
          name: req.body.name,
          schedule: req.body.schedule
      });
  
      res.status(200).json();
    }
    catch(err) {
      res.status(500).send({ message: err.message });
    
    }
  };

  exports.findAll = async (req, res) => {
	try {
		Traseu.findAll().then(routes => {
			res.status(200).send(routes);
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
		Traseu.destroy({where : {id: id}}).then(routes => {
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