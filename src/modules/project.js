import Clear from './clear';

import LocalSaver from './localDb';

function Project() {
  const reset = Clear();
  const localstore = LocalSaver();
  const projectList = document.querySelector('.project-list');
  const newProject = document.querySelector('[data-new-project]');
  const projectTitle = document.querySelector('.project-title');
  const aside = document.querySelector('aside');
  const taskList = document.getElementById('tasks');
  const deleteProjectBtn = document.querySelector('[data-delete-project]');
  const taskInput = document.getElementById('title');
  const taskDescription = document.getElementById('description');
  const taskDate = document.getElementById('datetime');
  const newTask = document.querySelector('[data-task-form]');
  const taskListChildren = taskList.children;
  const createTask = (title, description, date, priority) => {
    return { title, description, date, priority, };
  };

  const renderTasks = (selectedProject) => {
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
  };

  const renderProject = () => {
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
  };

  const markCompleted = (e) => {
    if (e.target.checked) {
      e.target.parentElement.classList.add('completed');
    } else {
      e.target.parentElement.classList.remove('completed');
    }
  };

  const deleteTasks = (e) => {
    const child = e.target.parentElement.parentElement;
    taskList.removeChild(child);
    localstore.save();
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

  const addProject = () => {
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
  };

  const buildTask = (e) => {
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
  };

  const chooseProject = (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      localstore.selectedListId = e.target.dataset.listId;
    }
    localstore.save();
    addProject();
  };

  projectList.addEventListener('click', chooseProject);

  const createProject = (projectName) => {
    return { id: Date.now().toString(), name: projectName, tasks: [] };
  };

  const makeNewProject = (e) => {
    e.preventDefault();
    const projectInput = document.querySelector('[data-new-input]');
    const inputValue = projectInput.value;
    if (inputValue === null || inputValue === '') return;
    const list = createProject(inputValue);
    projectInput.value = null;
    localstore.lists.push(list);
    addProject();
    localstore.save();
  };

  newProject.addEventListener('submit', makeNewProject);

  const deleteProject = (e) => {
    e.preventDefault();
    localstore.lists = localstore.lists.filter(list => list.id !== localstore.selectedListId);
    localstore.selectedListId = null;
    localstore.save();
    addProject();
  };

  deleteProjectBtn.addEventListener('click', deleteProject);

  const bindEvent = () => {
    newTask.addEventListener('submit', buildTask);
  };

  return { addProject, bindEvent };
}
export default Project;