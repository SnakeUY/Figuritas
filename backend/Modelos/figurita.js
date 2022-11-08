module.exports = (sequelize, Sequelize) => {
  const Figurita = sequelize.define("Figurita", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pais: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tengo: {
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue :'0'
    }
    },{
        tableName : "figurita"
    });
  return Figurita;
};
