const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Simple Web Application is UP');
  console.log('Hi')
});


const port = process.env.PORT;
app.listen(port, () => console.log(`Simple Web Application running on port ${port}`));