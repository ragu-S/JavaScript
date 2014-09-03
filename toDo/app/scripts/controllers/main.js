'use strict';

/**
 * @ngdoc function
 * @name toDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toDoApp
 */

var toDoItems = []; 

angular.module('toDoApp')
  .controller('MainCtrl', function ($scope) {
  	var normalized = [];
  	// one way of getting rid of duplicates in model
  	// new array without duplicates
    toDoItems.filter(function(item){
    	if(normalized.indexOf(item) === -1) {
    		normalized.push(item);
    	}
    });

    for(var i = 0; i < toDoItems.length; i++) {
    	var firstToDoIndex = toDoItems.indexOf(toDoItems[i]);
    	if(firstToDoIndex !== toDoItems.lastIndexOf(toDoItems[i])) {
    		toDoItems.splice(firstToDoIndex, 1);
    	}
    }

    $scope.todos = toDoItems;

    $scope.removeTodo = function(index) {
    	toDoItems.splice(index,1);
    	$scope.todos = toDoItems;
    };
  })

  .controller('AddToDo', function($scope) {
  	$scope.addTodoItem = function() {
  		// check for duplicates
  		if(toDoItems.indexOf($scope.todo) === toDoItems.lastIndexOf($scope.todo)) {
  			toDoItems.push($scope.todo);
        $scope.todo = '';
  		}
  		else {
  			console.log('duplicate');
  		}
  	};
  });

