function addTodo(){
  const todoText = inputElement.value;
  todos.push(todoText)

  saveToStorage();

  inputElement.value = '';

  renderTodos()
}

buttonElement.onclick = addTodo;
