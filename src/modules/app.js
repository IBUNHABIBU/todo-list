import '../css/style.css';

import el from './dom';

const Tasker = () => {
  const LIST_KEY = 'task.lists';
  const SELECTED_ID_KEY = 'task.selectedListId';
  let lists = JSON.parse(localStorage.getItem(LIST_KEY)) || [];
  let selectedListId = localStorage.getItem(SELECTED_ID_KEY);
  const taskListChildren = el.taskList.children;
  const save = () => {
    localStorage.setItem(LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(SELECTED_ID_KEY, selectedListId);
  };

  const clearPrevious = (projectList) => {
    while (projectList.firstChild) {
      projectList.removeChild(projectList.firstChild);
    }
  };

  const renderTasks = (selectedProject) => {
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
      const spanDiv = document.createElement('div');
      spanDiv.appendChild(taskElement);
      spanDiv.appendChild(descriptionElement);
      taskButton.appendChild(taskTrash);
      spanDiv.appendChild(dateElement);
      spanDiv.appendChild(priorityElement);
      spanDiv.appendChild(taskButton);
      taskListItem.appendChild(spanDiv);
      el.taskList.appendChild(taskListItem);
    });
  };

  const renderProject = () => {
    lists.forEach(list => {
      const li = document.createElement('li');
      li.dataset.listId = list.id;
      li.innerText = list.name;
      el.projectList.appendChild(li);
      if (list.id === selectedListId) {
        li.classList.add('selected');
        el.projectTitle.innerText = list.name;
      }
    });
  };

  const addProject = () => {
    clearPrevious(el.projectList);
    renderProject();
    const selectedProject = lists.find(list => list.id === selectedListId);
    if (selectedListId === null) {
      el.aside.style.display = 'none';
    } else {
      el.aside.style.display = 'block';
      clearPrevious(el.taskList);
      renderTasks(selectedProject);
    }
    save();
  };

  el.deleteProjectBtn.addEventListener('click', e => {
    e.preventDefault();
    lists = lists.filter(list => list.id !== selectedListId);
    selectedListId = null;
    save();
    addProject();
  });

  const createTask = (title, description, date, priority, completed) => ({
    id: Date.now().toString(), title, description, date, priority, completed,
  });

  const buildTask = (e) => {
    e.preventDefault();
    const taskValue = el.taskInput.value;
    const descriptionValue = el.taskDescription.value;
    const dateValue = el.taskDate.value;
    const priorityValue = el.priority.value;
    const task = createTask(taskValue, descriptionValue, dateValue, priorityValue);
    el.taskInput.value = null;
    el.taskDescription.value = null;
    el.taskDate.value = null;
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks.push(task);
    save();
    addProject();
  };

  const markCompleted = (e) => {
    if (e.target.tagName.toLowerCase() === 'input') {
      const selectedList = lists.find(list => list.id === selectedListId);
      const selectedTask = selectedList.tasks.find(task => task.id === e.target.id);
      selectedTask.completed = e.target.checked;
      save();
    }
  };

  const deleteTasks = (e) => {
    if (e.target.tagName.toLowerCase() === 'i') {
      const taskId = e.target.parentElement.parentElement.parentElement.firstChild.id;
      const selectedList = lists.find(list => list.id === selectedListId);
      selectedList.tasks = selectedList.tasks.filter(task => task.id !== taskId);
      const child = e.target.parentElement.parentElement.parentElement;
      el.taskList.removeChild(child);
      save();
    }
  };

  const scanTaskList = () => {
    for (let i = 0; i < taskListChildren.length; i += 1) {
      const taskListItem = taskListChildren[i];
      const checkBox = taskListItem.getElementsByTagName('input')[0];
      const deleteButton = taskListItem.getElementsByTagName('button')[0];
      checkBox.addEventListener('click', markCompleted);
      deleteButton.addEventListener('click', deleteTasks);
    }
  };

  const bindEvent = () => {
    el.newTask.addEventListener('submit', buildTask);
  };

  el.projectList.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedListId = e.target.dataset.listId;
    }
    save();
    addProject();
  });

  const createProject = (projectName) => ({
    id: Date.now().toString(), name: projectName, tasks: [],
  });

  const makeNewProject = (e) => {
    e.preventDefault();
    const projectInput = document.querySelector('[data-new-input]');
    const inputValue = projectInput.value;
    if (inputValue === null || inputValue === '') return;
    const list = createProject(inputValue);
    projectInput.value = null;
    lists.push(list);
    addProject();
    save();
  };

  el.newProject.addEventListener('submit', makeNewProject);

  addProject();

  const construct = () => {
    bindEvent();
    scanTaskList();
  };

  return { construct };
};
const tasker = Tasker();
tasker.construct();