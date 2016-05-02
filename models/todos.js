'use strict';

var util = require('util');
var _ = require('lodash');
var tasks = {}; // a place to store tasks by person

class User {
    constructor(name, task) {
        return new TaskList(task);
    }
}

class Task {
    constructor(task) {
        this.content = task.content;
        this.complete = false;
    }
    finish() {
        this.complete = true;
    }
}

class TaskList extends Array {
    constructor(task) {
        super()
        this[0] = new Task(task);
    }
    addTask(task) {
        this.push(new Task(task));
    }
    removeTask(index) {
        this.splice(index, 1);
    }
    list(queryInput) {
        return queryInput ? this.filterList(this.slice(), queryInput) : this.slice();
    }
    filterList(list, queryInput) {
        var queries = {};
        if (queryInput.status) {
            Object.defineProperty(queries, 'complete', {
                writeable: true,
                configurable: true,
                value: queryInput.status === 'active' ? false : true,
                enumerable: true
            });
        }
        return list.filter((thisTask, i, listArr) => {
            var shouldReturn = true;
            for (var qry in queries) {
                shouldReturn = queries[qry] == thisTask[qry] ? true : false;
            }
            return shouldReturn;
        });
    }
}

module.exports = {
    reset: function() {
        tasks = {}; // (this function is completed for you.)
    },
    // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
    listPeople: function() {
        // returns an array of all people for whom tasks exist
        return Object.keys(tasks);
    },
    add: function(name, task) {
        // saves a task for a given person
        if (!tasks[name]) {
            tasks[name] = new TaskList(task);
        } else {
            tasks[name].addTask(task);
        }

    },
    list: function(name, queryInput) {
        return tasks[name].list(queryInput);
    },
    complete: function(name, index) {
        tasks[name][index].finish();
    },
    remove: function(name, index) {
        tasks[name].removeTask(index);
    },
    taskModel: new Task({
        content: 'test'
    })

    // etc.
};
 
