
var app = angular.module('todo.controllers', ['ngMaterial'])
  app.controller('TodoController', ['$scope','TodoFactory', function($scope,TodoFactory) {
    $scope.todos = [
      {text:'Design API for Todo app', done:true},
      {text:'Wireframe ', done:false}];


    $scope.getTodos=function(){
        TodoFactory.getTodos().then(function(value){
              $scope.todos=value.data;
        }, function(reason) {
                               console.log("error occured");
                           }, function(value) {
                               console.log("no callback");
                           });
    }
    $scope.addTodo = function() {
        var abc={text:$scope.todoText, done:false}
        TodoFactory.saveTodos(abc).then(function(value){
            $scope.todos=value.data;
        }, function(reason) {
                   console.log("error occured");
               } ,function(value) {
                 console.log("no callback");
                 });

      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    var getDeleteIds=function(oldTodos){
        angular.forEach(oldTodos, function(todo) {
                                  if (todo.done) $scope.todos.push(todo);
                                });

                          return {todos :$scope.todos}
    }
 
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];




      TodoFactory.removeTodos(getDeleteIds(oldTodos)
                ).then(function(value){
              $scope.todos=value.data;
      },function(reason){

      },function(value){

      })
    };
  }])
  app.config(function($mdThemingProvider, $mdIconProvider){

      $mdIconProvider
          .defaultIconSet("css/svg/avatars.svg", 128)
          .icon("menu"       , "css/svg/menu.svg"        , 24)
          .icon("add"       , "css/svg/add.svg"        , 48)
          .icon("share"      , "css/svg/share.svg"       , 24)
          .icon("google_plus", "css/svg/google_plus.svg" , 512)
          .icon("hangouts"   , "css/svg/hangouts.svg"    , 512)
          .icon("twitter"    , "css/svg/twitter.svg"     , 512)
          .icon("phone"      , "css/svg/phone.svg"       , 512);

          $mdThemingProvider.theme('default')
              .primaryPalette('blue')
              .accentPalette('red');

    });
