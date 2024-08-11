
const express = require('express');

const app = express();

const cors = require('cors');

require('dotenv').config();

const sequelize = require('./config/db'); // Import the Sequelize instance

const appRoutes = require("./routes/route");
const { config } = require('dotenv');



const port = 4000;

console.log("port is ",port);


app.use(express.json());

app.use(cors({

    origin: 'http://localhost:3000', // allow requests from this origin

}));



// database connection  

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(error => {
        console.error('Failed to sync database:', error);
    });

app.use("/api",appRoutes);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

