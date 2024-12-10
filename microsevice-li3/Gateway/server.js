const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/users', async (req, res) => {
  const response = await axios.get('http://MicroUser:3001');
  res.send(response.data);
});

app.get('/pfe', async (req, res) => {
  const response = await axios.get('http://microPfe:3002');
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`Gateway running at http://localhost:${port}`);
});