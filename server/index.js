const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' }); // Ensure this is at the top

const app = express();

const sequelize = require('./config/db'); // Import the Sequelize instance
const appRoutes = require('./routes/route');

const port = process.env.PORT || 4000 ; // Explicit declaration

console.log("port is ", port); // Output the port being used

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
}));

// Database connection  
sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(error => {
        console.error('Failed to sync database:', error);
    });

app.use("/api", appRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
