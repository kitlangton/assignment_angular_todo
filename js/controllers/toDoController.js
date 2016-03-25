toDo.controller('toDoCtrl',
['$scope', 'TodoService',
  function($scope, TodoService) {
    $scope.items = TodoService.getItems();

    $scope.newDueDate = new Date();

    $scope.showCompleted = true;
    $scope.toggleStatus = "Hide Completed";

    $scope.toggleComplete = function() {
      $scope.showCompleted = !$scope.showCompleted;
      $scope.toggleStatus = $scope.showCompleted ? "Hide Completed" : "Show Completed";
    };

    $scope.clearCompleted = function() {
      TodoService.clearCompleted();
    };

    $scope.deleteTodo = function(todo) {
      TodoService.deleteTodo(todo);
    };

    $scope.todoOrder = "";

    $scope.createTodo = function() {
      TodoService.createTodo($scope.newTask, $scope.newDueDate);
      $scope.newTask = "";
      $scope.newDueDate = new Date();
    };
  }
]);
