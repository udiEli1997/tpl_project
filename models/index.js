const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.anunturi = require("./anunt.model.js")(sequelize, Sequelize);
db.statii = require("./statie.model.js")(sequelize, Sequelize);
db.rute = require("./traseu.model.js")(sequelize, Sequelize);
db.statii_rute = require("./statie_traseu.model.js")(sequelize,Sequelize);
db.imagini = require("./imagine.model.js")(sequelize,Sequelize)/*.sync( {alter: true})*/;

db.statii_rute.belongsTo(db.rute);
db.statii_rute.belongsTo(db.statii);
module.exports = db;