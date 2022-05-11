module.exports = (sequelize, Sequelize) => {
    const Station = sequelize.define("station", {
      name: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.DOUBLE
      },
      longitude: {
        type: Sequelize.DOUBLE
      }
    });
    return Station;
  };
