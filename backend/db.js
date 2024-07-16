const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

function connectMongoDB() {

    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('Connected to MongoDB atlas');
    }
    ).catch((error) => {
        console.log('Error:', error);
    });
}

module.exports = connectMongoDB;