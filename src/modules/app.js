import '../css/style.css';
function Tasker() {
    const taskInput = document.getElementById('title');
    const taskDescription = document.getElementById('description');
    const taskDate = document.getElementById('datetime');
    const taskList = document.getElementById('tasks');
    const projectList = document.querySelector('.project-list');

    const KEY = 'todolist';
    const SELECTED_ID_KEY = 'selectedListId';
    
    let selectedListId;
    const taskListChildren = taskList.children;
    const addButton = document.getElementById('add-task-btn');
    function construct(){
      bindEvent();
      scanTaskList();
    }
  
   function buildTask(){
    const priority = document.querySelector('input[name="priority"]:checked').value;
    let taskListItem, taskCheckBox, taskValue, taskButton, taskTrash;
    taskListItem = document.createElement('li');
    taskListItem.setAttribute('class', 'task');
    taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute('type','checkbox');
    taskValue = taskInput.value;
    const taskElement = document.createElement('span');
    taskElement.innerHTML = taskValue;
    const descriptionValue = taskDescription.value;
    const descriptionElement = document.createElement('span');
    descriptionElement.innerHTML = descriptionValue;
    const dateValue = taskDate.value;
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateValue;
    taskButton = document.createElement('button');
    taskTrash = document.createElement('i');
    taskButton.className = 'btn-trash';
    taskTrash.setAttribute('class','fa fa-trash');

    
    
    const priorityElement = document.createElement('span');
    priorityElement.innerHTML = priority;
    taskButton.appendChild(taskTrash);
    taskListItem.appendChild(taskCheckBox);
    taskListItem.appendChild(taskElement);
    taskListItem.appendChild(descriptionElement);
    taskListItem.appendChild(dateElement)
    
    taskListItem.appendChild(priorityElement)
    taskListItem.appendChild(taskButton);
    taskList.appendChild(taskListItem);
    
  }
  
  function addTask() {
    let taskValue = taskInput.value;
    // errorMessage.style.display = 'none';
    if(taskValue === ''){
      error();
    } else {
      buildTask();
      taskInput.value = '';
      scanTaskList();
    }
  }
  function enterKey(e){
    if(e.keyCode === 13 ){
      addTask();
    }
  }
   function bindEvent(){
    addButton.onclick= addTask.bind();
    taskInput.onkeypress = enterKey.bind(this);
  }
  function  scanTaskList(){
    let taskListItem, checkBox , deleteButton;
    for( let i = 0; i< taskListChildren.length; i++){
      taskListItem = taskListChildren[i];
      checkBox = taskListItem.getElementsByTagName('input')[0];
      deleteButton = taskListItem.getElementsByTagName('button')[0];
      checkBox.addEventListener('click', function(e){
        if(e.target.checked){
          e.target.parentElement.classList.add('completed');
        } else {
          e.target.parentElement.classList.remove('completed');
        }
      })
      deleteButton.addEventListener('click', function(e){
         taskListItem.remove();
      })
    }
  }
  const newProject = document.querySelector('[data-new-project]');
  
  let lists = [{
    id: 2,
    name: "joro"
  },
  {
    id: 4,
    name: "Blum"
  }
];
projectList.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    // e.target.id = selectedListId;
    e.target.dataset.listId = selectedListId;

  }
})
  newProject.addEventListener('submit', function(e){
    e.preventDefault();
    const projectInput = document.querySelector('[data-new-input]');
    const inputValue = projectInput.value;
    if(inputValue === null || inputValue === '') return;
    const list = createProject(inputValue);
    projectInput.value = null;
    lists.push(list);
    addProject();
  })
  function createProject(projectName){
    return { id: Date.now().toString(), name: projectName, todos: [] }
  }
function addProject(){
  clearPrevious(projectList);
    lists.forEach(list =>{
      const li = document.createElement('li');
      li.dataset.listId = list.id;
      li.innerText = list.name;
    projectList.appendChild(li);
 
    })
}
function clearPrevious(projectList){
  while (projectList.firstChild) {
    projectList.removeChild(projectList.firstChild)
  }
}
addProject();
  return { construct,  buildTask }
}
const todo = Tasker();
todo.construct();