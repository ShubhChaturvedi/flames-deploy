const express  = require('express');
const connectMongoDB = require('./db');
const cors = require('cors');

connectMongoDB();

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.status(200).json({
        message : "health check"
    })
});

app.post('/api/register', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message : "Data received",
        data : req.body
    });
});


app.listen(3000, () => {
        console.log('Server is running on port 3000');
});