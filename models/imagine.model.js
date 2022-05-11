module.exports = (sequelize, Sequelize) => {
    const Imagine = sequelize.define("image", {
      title: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      }
    });
    return Imagine;
  };