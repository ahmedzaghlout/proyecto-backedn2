const express = require("express");
const cors = require('cors');
const bp = require('body-parser')
const routerApi = require('./routes/index.routes');
const config = require("./config");

const app = express();

//settings
app.set("port", config.PORT);
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

//Middlewares
app.use(cors(corsOptions))
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


//routes
routerApi(app);



module.exports =  app ;
