require('dotenv').config();
const Sequelize = require('sequelize')
const Model = require('sequelize')
const DataTypes = require('sequelize')

const express = require('express');
const figuritaRoutes = require('./Controlador/figuritas');
const app = express();
app.use(express.json());

app.use('/',figuritaRoutes);
app.listen(8080,()=>{
    console.log('I\'m working')
})
