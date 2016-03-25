toDo.directive('todoItem', function(){
    return {
      templateUrl: "../js/directives/todoItem.html",
      restrict: "A",
      scope: {
        item: "=",
        deleteTodo: "&"
      }
    };
});
