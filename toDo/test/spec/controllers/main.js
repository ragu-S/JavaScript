'use strict';

describe('Controller: AddToDo', function () {

  // load the controller's module
  beforeEach(module('toDoApp'));

  var MainCtrl, AddToDo, scopeAddToDo,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scopeAddToDo = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    AddToDo = $controller('AddToDo', {
      $scope: scopeAddToDo
    });
  }));

  // it('should have no items to start', function() {
  //   expect(scopeAddToDo.todos.length).toBe(0);
  // });

  it('add items to the list', function() {
    scopeAddToDo.todo = 'Test 1';
    scopeAddToDo.addTodoItem();
    expect(scope.todos.length).toBe(1);
  });

  it('should add then remove an item from the list', function() {
    scopeAddToDo.todo = 'Test 1';
    scopeAddToDo.addTodoItem();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});
