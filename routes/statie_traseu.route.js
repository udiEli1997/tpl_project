module.exports = app => {
    const statie_traseu = require("../controllers/statie_traseu.controller.js");

    const router = require("express").Router();

    router.post('/create',statie_traseu.create);
    router.get('/',statie_traseu.findAll);

    app.use('/stations_routes',router);
};