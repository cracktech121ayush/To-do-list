document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task) {
            addTodo(task);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const task = todoInput.value.trim();
            if (task) {
                addTodo(task);
                todoInput.value = '';
            }
        }
    });

    const addTodo = (task) => {
        const li = document.createElement('li');
        li.textContent = task;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', () => {
            li.remove();
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(removeBtn);
        todoList.appendChild(li);
    };
});
      
