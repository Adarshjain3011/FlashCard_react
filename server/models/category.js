const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Category model
const Category = sequelize.define('Category', {
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = Category;
