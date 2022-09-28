const { Sequelize } = require('sequelize');

const seq = new Sequelize('angular-express-blog', 'sa', 'Q@rsche0098', {
    host: 'localhost',
    dialect: 'mssql'
})

module.exports = seq