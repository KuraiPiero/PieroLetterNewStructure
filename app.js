const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
app.use(cors());
app.use(bodyParser.json());
require('dotenv/config');
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'fruit_LAPTOPyelp%HULU3coffee_7usaHULU7SKYPECOFFEE hulu'
  })
);

//*Import Routes
const stockRoute = require('./routes/libros');
app.use('/api/libros', stockRoute);

const rutaDeSesion = require('./routes/usuarios');
app.use('/api/usuarios', rutaDeSesion);

//*Middlewares

//!Routes

app.get('/', (req, res) => {
  res.send('Entering Piero Letters');
});

//TODO Mongo Connection
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log('connect to DB');
  }
);

//?Server Listener
app.listen(9000);
