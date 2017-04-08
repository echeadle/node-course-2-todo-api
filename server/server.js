var mongoose = require('mongoose')

//Have mongoose use promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//Model creation

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

//Example creating a Todo
var newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then((doc) => {
  console.log('Saved Todo', doc);
}, (e) => {
  console.log('Unable to save todo')
});

var nextTodo = new Todo({
  text: "Make Breakfast",
  completed: true,
  completedAt: 0613162785
});

nextTodo.save().then((doc) => {
  console.log('Saved Todo', doc);
}, (err) => {
  console.log('Unable to save Todo', err);
})
