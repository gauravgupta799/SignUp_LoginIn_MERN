const mongoose = require('mongoose');

const connectionDB = () => {
    const connectionParams = { useNewUrlParser: true }
    try{
        mongoose.connect( process.env.DB,connectionParams);
        console.log("Connected to database successfully");

    }catch(err){
        console.error(err);
        console.log("Could not connect to database")
    }
}

module.exports = connectionDB;