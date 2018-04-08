var todofactory=angular.module('todo.factory',[]).factory('TodoFactory',['$http',"CONSTANTS",function($http,CONSTANTS){
  return{


            getTodos :function(){
                return $http.get(CONSTANTS.getTodos)
            },

            saveTodos :function(todo){
                return $http.post(CONSTANTS.saveTodos,todo)
            },
            removeTodos:function(todo){
                return $http.post(CONSTANTS.removeTodos,todo)
            }

  }




}])



