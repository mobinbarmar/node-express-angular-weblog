const seq = require('../config/db');

const { DataTypes }  = require('sequelize');

const Post = seq.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [4, 255],
        trim: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false,
        len: [4, 255],
        trim: true
    }
})

module.exports = Post