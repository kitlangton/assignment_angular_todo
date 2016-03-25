toDo.controller('toDoCtrl',
['$scope',
  function($scope) {
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

    $scope.createToDo = function() {
      $scope.items.push({ text: $scope.newTask, dueDate: $scope.newDueDate, completed: false});
      $scope.newTask = "";
      $scope.newDueDate = new Date();
    };
  }
]);