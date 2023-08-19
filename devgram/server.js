const dotenv = require('dotenv');

const express = require('express');
dotenv.config();
const app = express();
app.get('/', (req, res) => res.send('API is Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`))