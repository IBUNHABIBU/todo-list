import '../css/style.css';

import LocalSaver from './localDb';

import Clear from './clear'

function Tasker() {

  const taskInput = document.getElementById('title');
  const taskDescription = document.getElementById('description');
  const taskDate = document.getElementById('datetime');
  const taskList = document.getElementById('tasks');
  const projectList = document.querySelector('.project-list');
  const deleteProjectBtn = document.querySelector('[data-delete-project]');
  const projectTitle = document.querySelector('.project-title');
  const aside = document.querySelector('aside');
  const newProject = document.querySelector('[data-new-project]');
  const newTask = document.querySelector('[data-task-form]');
  
  const taskListChildren = taskList.children;
  const localstore = LocalSaver();
  const reset = Clear();
  
  function renderTasks(selectedProject) {
    selectedProject.tasks.forEach(task => {
      const taskListItem = document.createElement('li');
      taskListItem.setAttribute('class', 'task');
      const taskCheckBox = document.createElement('input');
      taskCheckBox.setAttribute('type', 'checkbox');
      const taskElement = document.createElement('span');
      const descriptionElement = document.createElement('span');
      const dateElement = document.createElement('span');
      const taskButton = document.createElement('button');
      const taskTrash = document.createElement('i');
      taskButton.className = 'btn-trash';
      taskTrash.setAttribute('class', 'fa fa-trash');
      const priorityElement = document.createElement('span');
      descriptionElement.innerHTML = task.description;
      priorityElement.innerHTML = task.priority;
      dateElement.innerHTML = task.date;
      taskElement.innerHTML = task.title;
      taskListItem.appendChild(taskCheckBox);
      taskListItem.appendChild(taskElement);
      taskListItem.appendChild(descriptionElement);
      taskButton.appendChild(taskTrash);
      taskListItem.appendChild(dateElement);
      taskListItem.appendChild(priorityElement);
      taskListItem.appendChild(taskButton);
      taskList.appendChild(taskListItem);
    });

  }

  function renderProject() {
    localstore.lists.forEach(list => {
      const li = document.createElement('li');
      li.dataset.listId = list.id;
      li.innerText = list.name;
      projectList.appendChild(li);
      if (list.id === localstore.selectedListId) {
        li.classList.add('selected');
        projectTitle.innerText = list.name;
      }
    });
  }

  function addProject() {
    reset.clearPrevious(projectList);
    renderProject();
    const selectedProject = localstore.lists.find(list => list.id === localstore.selectedListId);
    if (localstore.selectedListId === null) {
      aside.style.display = 'none';
    } else {
      aside.style.display = 'block';
      reset.clearPrevious(taskList);
      renderTasks(selectedProject);
    }
    localstore.save();
    scanTaskList();
  }
 
  deleteProjectBtn.addEventListener('click', e => {
    e.preventDefault();
    localstore.lists = localstore.lists.filter(list => list.id !== localstore.selectedListId);
    localstore.selectedListId = null;
    localstore.save();
    addProject();
  });

  function createTask(title, description, date, priority) {
    return {
      title, description, date, priority,
    };
  }

  function buildTask(e) {
    e.preventDefault();
    const taskValue = taskInput.value;
    const descriptionValue = taskDescription.value;
    const dateValue = taskDate.value;
    const priority = document.querySelector('input[name="priority"]:checked');
    const priorityValue = priority.value;
    const task = createTask(taskValue, descriptionValue, dateValue, priorityValue);
    taskInput.value = null;
    taskDescription.value = null;
    taskDate.value = null;
    const selectedList = localstore.lists.find(list => list.id === localstore.selectedListId);
    selectedList.tasks.push(task);
    localstore.save();
    addProject();
  }

  function markCompleted(e) {
    if (e.target.checked) {
      e.target.parentElement.classList.add('completed');
    } else {
      e.target.parentElement.classList.remove('completed');
    }
  }

  function deleteTasks(e) {
    const child = e.target.parentElement.parentElement;
    taskList.removeChild(child);
    localstore.save();
  }
  function scanTaskList() {
    for (let i = 0; i < taskListChildren.length; i += 1) {
      const taskListItem = taskListChildren[i];
      const checkBox = taskListItem.getElementsByTagName('input')[0];
      const deleteButton = taskListItem.getElementsByTagName('button')[0];
      checkBox.addEventListener('click', markCompleted);
      deleteButton.addEventListener('click', deleteTasks);
    }
  }

 
  function bindEvent() {
    newTask.addEventListener('submit',buildTask);
  }

  projectList.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
      localstore.selectedListId = e.target.dataset.listId;
    }
    localstore.save();
    addProject();
  });

  function createProject(projectName) {
    return { id: Date.now().toString(), name: projectName, tasks: [] };
  }

  function makeNewProject(e) {
    e.preventDefault();
    console.log("making")
    const projectInput = document.querySelector('[data-new-input]');
    const inputValue = projectInput.value;
    if (inputValue === null || inputValue === '') return;
    const list = createProject(inputValue);
    projectInput.value = null;
    localstore.lists.push(list);
    addProject();
    localstore.save();
  }
  newProject.addEventListener('submit', makeNewProject);

  addProject();

  function construct() {
    bindEvent();
  }
  return { construct };
}
const todo = Tasker();
todo.construct();