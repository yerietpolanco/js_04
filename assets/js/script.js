const addButton = document.querySelector("#add");

let todos = [];
addButton.addEventListener("click", () => {
  const todoName = document.querySelector("#todoName");

  todos.push({
    id: todos.length + 1,
    description: todoName.value,
    checked: false,
  });

  todoName.value = "";

  printTodos();
});

done = 0;
const printTodos = () => {
  console.log("Imprimir todos");
  const todoList = document.querySelector("#todos");
  todoList.innerHTML = "";

  calc();

  todos.forEach((todo) => {
    todoList.innerHTML += `
    <div class="row">
        <div class="item">${todo.id}</div>
        <div class="item">${todo.description}</div>
        <div class="item">
        <input type="checkbox" onchange="mark(${todo.id})" />
          <div class="delete" onclick="deleteTodo(${todo.id})">
            <i class="fas fa-trash"></i>
          </div>
        </div>
      </div>
      `;
  });
};

function calc() {
  totalSpan = document.querySelector("#total");
  doneSpan = document.querySelector("#done");

  const total = todos.length;


  const done = todos.filter((todo) => todo.checked);

  totalSpan.innerHTML = total;
  doneSpan.innerHTML = done.length;
}

function mark(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.checked = !todo.checked;
    }
    return todo;
  });

  calc();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  printTodos();
}