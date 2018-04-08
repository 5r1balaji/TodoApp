angular.module('todoApp', ['ngMaterial'])
  .controller('TodoController', ['$scope', function($scope) {
    $scope.todos = [
      {text:'Design API for Todo app', done:true},
      {text:'Wireframe ', done:false}];
 
    $scope.addTodo = function() {
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
 
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  }])
  .config(function($mdThemingProvider, $mdIconProvider){

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