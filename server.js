const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('public'))


const port = process.env.PORT;
app.listen(port, () => console.log(`Simple Web Application running on port ${port}`));


//http://localhost:5000/shiveJee.jpg