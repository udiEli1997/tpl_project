module.exports = {
  HOST: "localhost",
  USER: "test",
  PASSWORD: "TestEli2022!",
  DB: "tpl_database",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};