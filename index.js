const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const deleteCompleted = document.getElementById('deleteCompleted');

let tasks = [];

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  handleSubmit(taskInput.value);
  taskInput.value = '';
});

taskList.addEventListener('click', function(e) {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const taskId = parseInt(e.target.dataset.id);
    handleCheckTask(taskId);
  }
});

deleteCompleted.addEventListener('click', function() {
    handleDelete();
});

function handleSubmit(title) {
  const newTask = {
    id: Date.now(),
    title: title,
    completed: false,
  };
  tasks.push(newTask);
  renderTasks();
}

function handleCheckTask(taskId) {
  const task = tasks.find(task => task.id === taskId);
  task.completed = !task.completed;
  renderTasks();
}

function handleDelete() {
  tasks = tasks.filter(task => !task.completed);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('div');
    li.innerHTML = `
      <input type="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
      <span class="${task.completed ? 'is-completed' : ''}">${task.title}</span>
      <hr>
      `;
    taskList.appendChild(li);
  });
}