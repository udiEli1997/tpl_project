const db = require("../models");
const base64Img = require('base64-img');
const Imagine = db.imagini;

exports.create = async (req, res) => {
    try {
        const already_exist = await Imagine.findOne({ where: { title: req.body.title } });
  
      if(already_exist)
      {
          res.status(409).json({ message: 'This image already exists!' });
          return;
      }
  
      let photo = "";
      if(req.body.photo) {
          const photo_name = `image_${req.body.title}_${Date.now()}`;
          base64Img.img(req.body.photo,'./images/gallery',photo_name,function(err,filepath){
              //console.log(filepath);
          })
          photo = `images/gallery/${photo_name}.jpg`
      }
      else {
          photo = 'images/no_image.jpg';
      }
      
  
      Imagine.create({
          title: req.body.title,
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

  exports.findAll = async (req, res) => {
	try {
		Imagine.findAll({ attributes: ['title','photo']}).then(images => {
			images.forEach(n => {
				n.photo = `http://164.92.211.246:8080/${n.photo}`;
			});
			res.status(200).send(images);
		})
		.catch(err => {
			res.status(500).send({message: err.message});
		})
    }
	catch(err) {
	  res.status(500).send({ message: err.message });
	
	}
};
