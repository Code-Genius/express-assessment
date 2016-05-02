'use strict';

var express = require('express');
var router = express.Router();
console.log('loading todos');
var todos = require('../models/todos');
module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.
router.get('/users',
          (req, res, next) =>
          res.send(todos.listPeople()));
router.get('/users/:name',
          (req, res, next) => {
            try{
              if(req.params.status) var qStatus = req.params.status;
              res.send(todos.list(req.params.name, req.query || null));
            }
            catch(err){next(err)}
          },(err, req, res, next) => {
            res.status(404).send();
          })
router.post('/users/:name',
          (req, res, next) =>
          {
            todos.add(req.params.name, req.body);
            var taskList = todos.list(req.params.name);
            console.log(todos.list('sarah')[0]);
            var newTask = taskList[taskList.length-1];
            res.status(201).json(newTask).send();
        }, (err, req, res, next) => {
            res.status(400).send();
        });
router.put('/users/:name/:index', (req, res, next) => {
  todos.complete(req.params.name, req.params.index);
  res.status(200).send();
});
router.delete('/users/:name/:index', (req, res, next) => {
  todos.remove(req.params.name, req.params.index);
  res.status(204).send();
});
