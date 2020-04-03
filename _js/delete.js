function deleteTodo(pos) {
  todos.splice(pos, 1)

  renderTodos()
}