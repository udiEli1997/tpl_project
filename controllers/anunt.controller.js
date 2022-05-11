const db = require("../models");
const fs = require('fs');
const base64Img = require('base64-img');
const Anunt = db.anunturi;
const Op = db.Sequelize.Op;

//creare si salvare un nou anunt
exports.create = async (req, res) => {
  try {
  	const already_exist = await Anunt.findOne({ where: { title: req.body.title } });

	if(already_exist)
	{
		res.status(409).json({ message: 'This title already exist!' });
		return;
	}

	let photo = "";
	if(req.body.photo) {
		const photo_name = `image_${req.body.title}_${Date.now()}`;
		base64Img.img(req.body.photo,'./images',photo_name,function(err,filepath){
			//console.log(filepath);
		})
		photo = `images/${photo_name}.jpg`
	}
	else {
		photo = 'images/no_image.jpg';
	}
	

	Anunt.create({
		title: req.body.title,
		description: req.body.description,
		publication_date: req.body.publication_date,
		photo: photo
	});

	res.status(200).json({
		success: true,
		url: `http://164.92.211.246:8080/${photo}`
	});


  }
  catch(err) {
	res.status(500).send({ message: err.message });
  
  }
};
//returnarea tuturor anunturilor
exports.findAll = async (req, res) => {
	try {
		Anunt.findAll().then(news => {
			news.forEach(n => {
				n.photo = `http://164.92.211.246:8080/${n.photo}`;
			});
			news.sort((a,b) => { return new Date(b.publication_date) - new Date(a.publication_date);});
			res.status(200).send(news);
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
	  	Anunt.destroy({where : {id: id}}).then(routes => {
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