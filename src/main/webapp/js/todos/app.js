'use strict'
var todoApp = angular.module('todoApp', ['todo.controllers',
    'todo.factory'
]);


    todoApp.constant("CONSTANTS",{
        getTodos:"/rest/todos/",
        saveTodos:"/rest/todos/",
        removeTodos:"/rest/remove"

    })