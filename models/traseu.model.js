module.exports = (sequelize, Sequelize) => {
    const Route = sequelize.define("route", {
      name: {
        type: Sequelize.STRING
      },
      schedule: {
        type: Sequelize.STRING
      }
    });
    return Route;
  };