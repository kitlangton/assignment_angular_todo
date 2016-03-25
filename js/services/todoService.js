toDo.factory('TodoService', function(){

  var _items = [];

  var getItems = function() {
    return _items;
  };

  var createToDo = function(newTask, newDueDate) {
    _items.push({ text: newTask, dueDate: newDueDate, completed: false});
  };

  var deleteTodo = function(todo) {
    _items.splice(_items.indexOf(todo), 1);
  };

  var clearCompleted = function() {
    _items = _items.filter(function(item) {
      return !item.completed;
    });
  };

  return {
    getItems: getItems,
    createTodo: createTodo,
    deleteTodo: deleteTodo,
    clearCompleted: clearCompleted
  };
});
