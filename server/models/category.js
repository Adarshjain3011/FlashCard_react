
const { DataTypes } = require('sequelize');

const Category = sequelize.define('Category', {
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = Category;
