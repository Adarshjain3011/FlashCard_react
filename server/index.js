
const express = require('express');

const app = express();

const cors = require('cors');

const mysql = require('mysql');

const port = process.env.PORT || 4000;




app.use(express.json());

app.use(cors({

    origin: 'http://localhost:3000', // allow requests from this origin

}));



// database connection  

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {

    console.log(`listening on port  ${port} `);
    
})