module.exports = app => {
    const imagini = require("../controllers/imagine.controller.js");

    const router = require("express").Router();

    router.post('/create',imagini.create);
    router.get('/',imagini.findAll);

    app.use('/images/gallery',router);
};