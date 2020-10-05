import '../css/style.css';
function Tasker() {
  const taskInput = document.getElementById('title');
  const taskDescription = document.getElementById('description');
  const taskDate = document.getElementById('datetime');
  const taskList = document.getElementById('tasks');
  const projectList = document.querySelector('.project-list');
  const deleteProjectBtn = document.querySelector('[data-delete-project]');
  const projectTitle = document.querySelector('.project-title');
  const aside = document.querySelector('aside');
  const LOCAL_STORAGE_LIST_KEY = 'task.lists';
  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
  const newProject = document.querySelector('[data-new-project]');
  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
  let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);
  const taskListChildren = taskList.children;
  const addButton = document.getElementById('add-task-btn');
  deleteProjectBtn.addEventListener('click', e => {
    e.preventDefault();
    lists = lists.filter( list => list.id !== selectedListId );
    selectedListId = null;
    save();
    addProject();
  });
  function renderTasks(selectedProject) {
    selectedProject.tasks.forEach(task => {
      const taskListItem;
      const taskCheckBox;
      const taskButton;
      const taskTrash;
      taskListItem = document.createElement('li');
      taskListItem.setAttribute('class', 'task');
      taskCheckBox = document.createElement('input');
      taskCheckBox.setAttribute('type', 'checkbox');
      const taskElement = document.createElement('span');
      const descriptionElement = document.createElement('span');
      const dateElement = document.createElement('span');
      taskButton = document.createElement('button');
      taskTrash = document.createElement('i');
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

   function buildTask() {
    let taskValue = taskInput.value;
    const descriptionValue = taskDescription.value;
    const dateValue = taskDate.value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const task = createTask(taskValue, descriptionValue, dateValue, priority);
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks.push(task);
  }

  function createTask(title, description, date, priority){
    return { title: title, description: description, date: date, priority: priority };
  }

  function addTask() {
    let taskValue = taskInput.value;
    if(taskValue === ''){
    } else {
      buildTask();
      taskInput.value = '';
      scanTaskList();
    }
  }

  function enterKey(e) {
    if(e.keyCode === 13 ){
      addTask();
    }
  }

  function bindEvent() {
    addButton.onclick= addTask.bind();
    taskInput.onkeypress = enterKey.bind(this);
  }

  function  scanTaskList() {
    let taskListItem, checkBox , deleteButton;
    for( let i = 0; i< taskListChildren.length; i++) {
      taskListItem = taskListChildren[i];
      checkBox = taskListItem.getElementsByTagName('input')[0];
      deleteButton = taskListItem.getElementsByTagName('button')[0];
      checkBox.addEventListener('click', function(e){
        if(e.target.checked){
          e.target.parentElement.classList.add('completed');
        } else {
          e.target.parentElement.classList.remove('completed');
        }
      });
      deleteButton.addEventListener('click', function(e) {
        let child = e.target.parentElement.parentElement
        taskList.removeChild(child);
        save();
      });
    }
  }

  projectList.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedListId = e.target.dataset.listId;
    }
    save();
    addProject();
  });

  newProject.addEventListener('submit', function(e) {
    e.preventDefault();
    const projectInput = document.querySelector('[data-new-input]');
    const inputValue = projectInput.value;
    if(inputValue === null || inputValue === '') return;
    const list = createProject(inputValue);
    projectInput.value = null;
    lists.push(list);
    addProject();
    save();
  });

  function createProject(projectName) {
    return { id: Date.now().toString(), name: projectName, tasks: [] }
  }

  function addProject() {
    clearPrevious(projectList);
     renderProject();
     const selectedProject = lists.find( list => list.id === selectedListId );
     if(selectedListId === null) {
       aside.style.display = 'none';
     } else {
      aside.style.display = 'block';
      clearPrevious(taskList);
      renderTasks(selectedProject);
    }
    save();
  }
  
 function renderProject() {
   lists.forEach(list => {
     const li = document.createElement('li');
     li.dataset.listId = list.id;
     li.innerText = list.name;
     projectList.appendChild(li);
     if(list.id === selectedListId) {
       li.classList.add('selected');
       projectTitle.innerText = list.name;
     }
   });
 }

 function clearPrevious(projectList) {
   while (projectList.firstChild) {
     projectList.removeChild(projectList.firstChild);
   }
 }

addProject();

 function save() {
   localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
   localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
 }

 function construct() {
  bindEvent();
  scanTaskList();
}
  return { construct  }
}
const todo = Tasker();
todo.construct();