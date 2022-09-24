const express = require('express');
const app = express();
const DB = require('./models');
const cors = require('cors');
const userRoute = require('./routes/user');


//Cross Origin 
app.use(cors({origin: true , credentials: true}));

// sequelize Database IF NOT EXIST
DB.sequelize.sync();

// bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use('/' , userRoute);


module.exports = app