const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const value = input.value.trim();
    if (value) {
        const todo = document.createElement('li');
        todo.innerHTML = `
            <span>${value}</span>
            <button onclick='deleteTodo(this)'>Delete</button>
            `;
        todoList.appendChild(todo);
        input.value = '';
    }
}

function deleteTodo(button) {
    const todo = button.parentElement;
    todoList.removeChild(todo);
}