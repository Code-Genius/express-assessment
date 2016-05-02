'use strict';

console.log('starting...');

//REQUIRE MODULES
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  module.exports = app; // this line is only used to make testing easier.

//configure BODY PARSER
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())

//INCLUDE ROUTES
  console.log('loading routes...');
  app.use('/', require('./routes'));

//RUN SERVER
  if (!module.parent) app.listen(3000); // conditional prevents a very esotetiric EADDRINUSE issue with mocha watch + supertest + npm test.
