'use strict';

var express = require('express');
var router = express.Router();
console.log('loading todos');
module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.
var L = require('./routeLogic');
router.get(   '/users', L.getUsers);
router.get(   '/users/:name', L.getUsersName, L.getUsersNameError);
router.post(  '/users/:name', L.postUsersName, L.postUsersNameErr)
router.put(   '/users/:name/:index', L.putUsersNameIndex);
router.delete('/users/:name/:index', L.deleteUsersNameIndex);
  
