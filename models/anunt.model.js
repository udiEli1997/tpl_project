module.exports = (sequelize, Sequelize) => {
  const Anunt = sequelize.define("new", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    publication_date: {
      type: Sequelize.DATE
    },
    photo: {
      type: Sequelize.STRING
    }
  });
  return Anunt;
};