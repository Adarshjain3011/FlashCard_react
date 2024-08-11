// db.js
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('sample', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize; // Export the Sequelize instance
