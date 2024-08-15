require('dotenv').config();

const express = require('express');
const connection = require('./config/db');
const routes = require('./routes/web');

const app = express();
app.use(express.json());
app.use('/', routes);

connection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server iniciado na prta ${PORT}`);
});