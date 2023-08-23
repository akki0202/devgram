const mongoose = require('mongoose');
const config = require('config');
// const dotenv = require("dotenv");
// const db = config.get('mongoURI');
// console.log(db);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI);

        console.log("MongoDB connected..");
    }
    catch (err) {
        console.error(err.message);
        //exit process failing
        process.exit(1);

    }
}
module.exports = connectDB;