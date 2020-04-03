const inputElement = document.querySelector(".container input")
const buttonElement = document.querySelector(".container button")
const listElement = document.querySelector("#app ul")


const todos = [
  'Varrer a sala',
  'Estudar Javascript',
  'Apertar o Botão'
]

function renderTodos(){
  listElement.innerHTML = '';

  for (todo of todos){
    const pos = todos.indexOf(todo)

    const li = document.createElement('li')
    const a = document.createElement('a')

    a.textContent = 'X'

    a.setAttribute('href', '#')
    a.setAttribute('onclick', 'deleteTodo(' + pos + ')')

    li.textContent = todo
    li.appendChild(a)

    listElement.appendChild(li)
  }
};

renderTodos()
