const express  = require('express');
const connectMongoDB = require('./db');
const cors = require('cors');

connectMongoDB();

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, () => {
        console.log('Server is running on port 3000');
});