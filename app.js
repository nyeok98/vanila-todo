let input = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

function addTodo() {
    const value = input.value.trim();
    if (value) {
        const todo = document.createElement('li');
        todo.textContent = value;
        todoList.appendChild(todo);
        input.value = '';
    }
}