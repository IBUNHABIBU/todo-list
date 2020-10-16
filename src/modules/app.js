import '../css/style.css';

import Data from './localDb';
const Tasker = (() => {
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
  
  const LIST_KEY = 'task.lists';
  const SELECTED_ID_KEY = 'task.selectedListId';
  let lists = JSON.parse(localStorage.getItem(LIST_KEY)) || [];
  let selectedListId = localStorage.getItem(SELECTED_ID_KEY);
  const taskListChildren = taskList.children;
  function save() {
    localStorage.setItem(LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(SELECTED_ID_KEY, selectedListId);
  }

  function clearPrevious(projectList) {
    while (projectList.firstChild) {
      projectList.removeChild(projectList.firstChild);
    }
  }

  function renderTasks(selectedProject) {
    selectedProject.tasks.forEach(task => {
      const taskListItem = document.createElement('li');
      taskListItem.setAttribute('class', 'task');
      const taskCheckBox = document.createElement('input');
      taskCheckBox.id = task.id;
      taskCheckBox.checked = task.completed;
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
      const spanDiv = document.createElement('div')
      spanDiv.appendChild(taskElement);
      spanDiv.appendChild(descriptionElement);
      taskButton.appendChild(taskTrash);
      spanDiv.appendChild(dateElement);
      spanDiv.appendChild(priorityElement);
      spanDiv.appendChild(taskButton);
      taskListItem.appendChild(spanDiv);
      taskList.appendChild(taskListItem);
    });
  }

  function renderProject() {
    lists.forEach(list => {
      const li = document.createElement('li');
      li.dataset.listId = list.id;
      li.innerText = list.name;
      projectList.appendChild(li);
      if (list.id === selectedListId) {
        li.classList.add('selected');
        projectTitle.innerText = list.name;
      }
    });
  }

  function addProject() {
    clearPrevious(projectList);
    renderProject();
    const selectedProject = lists.find(list => list.id === selectedListId);
    if (selectedListId === null) {
      aside.style.display = 'none';
    } else {
      aside.style.display = 'block';
      clearPrevious(taskList);
      renderTasks(selectedProject);
    }
    save();
  }
 
  deleteProjectBtn.addEventListener('click', e => {
    e.preventDefault();
    lists = lists.filter(list => list.id !== selectedListId);
    selectedListId = null;
    save();
    addProject();
  });

  function createTask(title, description, date, priority,completed ) {
    return {
      id: Date.now().toString(), title, description, date, priority, completed,
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
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks.push(task);
    save();
    addProject();
  }

  function markCompleted(e) {
    if (e.target.tagName.toLowerCase() === 'input') {
      const selectedList = lists.find(list => list.id === selectedListId)
      const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
      selectedTask.completed = e.target.checked;
      save();
    }
  }

  function deleteTasks(e) {
    if(e.target.tagName.toLowerCase() === 'i'){
      const taskId = e.target.parentElement.parentElement.firstChild.id
      const selectedList = lists.find(list => list.id === selectedListId)
      selectedList.tasks = selectedList.tasks.filter(task => task.id !== taskId)
      const child = e.target.parentElement.parentElement;
      taskList.removeChild(child);
      save();
    };
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
      selectedListId = e.target.dataset.listId;
    }
    save();
    addProject();
  });

  function createProject(projectName) {
    return { id: Date.now().toString(), name: projectName, tasks: [] };
  }

  function makeNewProject(e) {
    e.preventDefault();
    const projectInput = document.querySelector('[data-new-input]');
    const inputValue = projectInput.value;
    if (inputValue === null || inputValue === '') return;
    const list = createProject(inputValue);
    projectInput.value = null;
    lists.push(list);
    addProject();
    save();
  }
  newProject.addEventListener('submit', makeNewProject);

  addProject();

  function construct() {
    bindEvent();
    scanTaskList();
  }
  return { construct };
})(Data).construct();
