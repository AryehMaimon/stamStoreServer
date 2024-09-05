const mongoose = require('mongoose');
require('dotenv').config();

const dbName = process.env.MONGODB_DATABASE;
const MONGO_URL = process.env.MONGO_URL;

function connect() {
    try {
       
        const fullUrl = `${MONGO_URL}/${dbName}`;
        
        mongoose.connect(fullUrl)
            .then(() => {
                console.log(`DB connection success. Connected to database: ${dbName}`);
            });
    } catch (err) {
        console.log("MongoDB error", err);
    }
}

module.exports = { connect };