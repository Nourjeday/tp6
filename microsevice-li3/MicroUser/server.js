const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const app = express();
const port = 3001;

mongoose.connect('mongodb://mongo:27017/microservices', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const client = redis.createClient({ host: 'redis' });

app.get('/', (req, res) => {
  res.send('Microservice User');
});

app.listen(port, () => {
  console.log(`Microservice User running at http://localhost:${port}`);
});