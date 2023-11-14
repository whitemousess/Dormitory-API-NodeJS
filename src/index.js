const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
require("dotenv").config();
const cookieParser = require("cookie-parser");

const db = require('./config/db')
const route = require('./routes');

db.connect();
const app = express();
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());

route(app);

app.listen(1407, () =>
  console.log(`app listening at http://localhost:1407`)
);
