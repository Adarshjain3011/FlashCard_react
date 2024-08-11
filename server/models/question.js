const { DataTypes } = require('sequelize');
const Category = require('./category'); // Assuming it's in the same directory

const Question = sequelize.define('Question', {
    questionName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    options: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
});

// Define the relationship between Question and Category
Question.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category',
});

module.exports = Question;
