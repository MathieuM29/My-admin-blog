const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const router = require('./app/router');
const session = require('express-session');
const PORT = process.env.PORT || 3000;

const app = express()

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);
app.use('/assets', express.static('assets'));

app.listen(PORT, () => {
    console.log(`J'écoute sur le port ${PORT}...`);
});
