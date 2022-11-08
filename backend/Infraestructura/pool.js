const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER,process.env.PGPASSWORD,{
    dialect: 'postgres',
    host: process.env.PGHOST,
    port: process.env.PGPORT
});

const db = {};
db.Sequelize = Sequelize
db.sequelize = sequelize
db.Modelo = require('../Modelos/figurita')(sequelize,Sequelize)
module.exports = db