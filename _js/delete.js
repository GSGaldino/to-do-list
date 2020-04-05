function deleteTodo(pos) {

  const target = event.target;
  const parent = target.parentNode;
  
  parent.style.transition = "0.5s"
  parent.style.opacity = "0%"

  setTimeout(function(){

    todos.splice(pos, 1)
    saveToStorage()
    renderTodos()

  }, 500)};
