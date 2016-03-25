toDo.controller('toDoCtrl',
['$scope', 'TodoService',
  function($scope, TodoService) {
    $scope.item = {
      text: "Get groceries from the store",
      dueDate: new Date(),
      completed: false
    };

    $scope.items = [
      { text: "task 1", dueDate: new Date(), completed: false },
      { text: "task 2", dueDate: new Date(), completed: false },
      { text: "task 3", dueDate: new Date(), completed: false },
      { text: "task 4", dueDate: new Date(), completed: false },
      { text: "task 5", dueDate: new Date(), completed: false }
    ];

    $scope.newDueDate = new Date();

    $scope.showCompleted = true;
    $scope.toggleStatus = "Hide Completed";

    $scope.toggleComplete = function() {
      $scope.showCompleted = !$scope.showCompleted;
      $scope.toggleStatus = $scope.showCompleted ? "Hide Completed" : "Show Completed";
    };

    $scope.newTask = "";
    $scope.newDueDate = new Date();

  }
]);
