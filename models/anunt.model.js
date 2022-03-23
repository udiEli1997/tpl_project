module.exports = (sequelize, Sequelize) => {
  const Anunt = sequelize.define("anunt", {
    titlu: {
      type: Sequelize.STRING
    },
    descriere: {
      type: Sequelize.STRING
    },
    data_publicare: {
      type: Sequelize.DATE
    },
    fotografie: {
      type: Sequelize.BLOB("long")
    }
  });
  return Anunt;
};