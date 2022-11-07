require('dotenv').config();
const Sequelize = require('sequelize')
const Model = require('sequelize')
const DataTypes = require('sequelize')

const express = require('express');
const taskRoutes = require('./controllers/task');
const app = express();
app.use(express.json());

app.use('/tasks',taskRoutes);
app.listen(8080,()=>{
    console.log('I\'m working')
})
