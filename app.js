var express = require('express');
var bodyParser = require('body-parser');
var app = express();
module.exports = app; //this line is only used to make testing easier

// REMEMBER TO PLUGIN YOUR ROUTERS HERE!

app.listen(process.env.PORT || 3000);
