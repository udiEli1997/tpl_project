module.exports = app => {
    const rute = require("../controllers/traseu.controller.js");

    const router = require("express").Router();

    router.post('/create',rute.create);
    router.get('/',rute.findAll);
    router.delete('/delete/:id',rute.deleteById);

    app.use('/routes',router);
};