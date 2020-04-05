const inputElement = document.querySelector(".container input")
const buttonElement = document.querySelector(".container button")
const listElement = document.querySelector("#app ul")

const todos = JSON.parse(localStorage.getItem('todo_list')) || []

function renderTodos(){
  listElement.innerHTML = '';

  for (todo of todos){
    const pos = todos.indexOf(todo)

    const li = document.createElement('li')
    const a = document.createElement('a')

    a.textContent = 'X'

    a.setAttribute('onclick', 'deleteTodo(' + pos + ')')

    li.textContent = todo
    li.appendChild(a)

    listElement.appendChild(li)
  }
};

renderTodos()
