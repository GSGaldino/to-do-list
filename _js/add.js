function addTodo(){
  const todoText = inputElement.value;
  todos.push(todoText)

  inputElement.value = '';

  renderTodos()
}

buttonElement.onclick = addTodo;
