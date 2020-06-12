//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event Listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions
function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  if (todoInput.value === '') {
    return 'todo-item' === null;
  }
  todoDiv.appendChild(newTodo);
  //Completed button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class = "fas fa-check"> </i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  //Check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class = "fas fa-trash"> </i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  //Clear toDo input value
  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;
  //Delet To do
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.remove();
  }
  ///Check mark

  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
