module.exports = app => {
    const anunturi = require("../controllers/anunt.controller.js");

    const router = require("express").Router();

    router.post('/create',anunturi.create);
    router.get('/',anunturi.findAll);

    app.use('/news',router);
};