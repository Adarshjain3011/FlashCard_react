

const mysql = require('mysql');

async function dbConnect (){

    try{

        const db = mysql.createConnection({

            host: 'localhost',
            user: 'root',
            password: '',
            database: 'sample'
        })

        db.connect((error)=>{

            if(error) throw error;
            console.log("my sql is connected")
        })

    }catch(error){

        console.error('Failed to connect to the database', error);

        process.exit(1);
    }
}

