
const express = require('express');

const app = express();

const cors = require('cors');

const mysql = require('mysql');

const appRoutes = require("./routes/route");

const dbConnect = require('./config/db'); // Change import to require

const port = process.env.PORT || 4000;


app.use(express.json());

app.use(cors({

    origin: 'http://localhost:3000', // allow requests from this origin

}));



// database connection  

dbConnect();

app.use("/api",appRoutes);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {

    console.log(`listening on port  ${port} `);
    
})