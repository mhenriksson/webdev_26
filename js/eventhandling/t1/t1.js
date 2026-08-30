const todoList = [
  {id: 1, task: 'Learn HTML', completed: true},
  {id: 2, task: 'Learn CSS', completed: true},
  {id: 3, task: 'Learn JS', completed: false},
  {id: 4, task: 'Learn TypeScript', completed: false},
  {id: 5, task: 'Learn React', completed: false},
];

const ul = document.querySelector('ul');

for (let todo of todoList) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const button = document.createElement('button');

  button.innerText = 'X';

  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${todo.id}`);
  if (todo.completed) {
    input.setAttribute('checked', true);
  }

  const label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.innerText = todo.task;

  li.insertAdjacentElement('beforeend', input);
  li.insertAdjacentElement('beforeend', label);
  li.insertAdjacentElement('beforeend', button);
  ul.insertAdjacentElement('beforeend', li);

  input.addEventListener('change', (event) => {
    todo.completed = event.target.checked;
    console.log('todoList', todoList);
  });

  button.addEventListener('click', () => {
    const index = todoList.findIndex((item) => item?.id === todo.id);
    if (index > -1) {
      delete todoList[index];
    }
    console.log('todoList', todoList);
    ul.removeChild(li);
  });
}

const addButton = document.querySelector('button.add-btn');

addButton.addEventListener('click', () => {
  const dialog = document.querySelector('dialog');
  dialog.show();

  const form = dialog.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTodoTask = form.querySelector('input').value;

    const newTodoObject = {
      id: todoList[todoList.length - 1].id + 1,
      task: newTodoTask,
      completed: false,
    };

    todoList.push(newTodoObject);
    form.reset();
    console.log('todoList', todoList);
  });
});
