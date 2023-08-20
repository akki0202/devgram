const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');

const app = express();

dotenv.config();
//connecting DATABASE
connectDB();




app.get('/', (req, res) => res.send('API is Running'));
// Define routes 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`)) 