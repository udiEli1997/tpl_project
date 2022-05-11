module.exports = app => {
    const statii = require("../controllers/statie.controller.js");

    const router = require("express").Router();

    router.post('/create',statii.create);
    router.get('/',statii.findAll);
    router.delete('/delete/:id',statii.deleteById);

    app.use('/stations',router);
};