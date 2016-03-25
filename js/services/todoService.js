toDo.factory('TodoService', function(){
  var _items = [ { text: "task 1", dueDate: new Date(), completed: false },
      { text: "task 2", dueDate: new Date(), completed: false },
      { text: "task 3", dueDate: new Date(), completed: false },
      { text: "task 4", dueDate: new Date(), completed: false },
      { text: "task 5", dueDate: new Date(), completed: false }
    ];

  var getItems = function() {
    return _items;
  };

  var createTodo = function(newTask, newDueDate) {
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
