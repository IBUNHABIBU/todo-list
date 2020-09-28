import '../css/style.css';
function Tasker() {
  const taskInput = document.getElementById('title');
    const taskList = document.getElementById('tasks');
    const taskListChildren = taskList.children;
    const addButton = document.getElementById('add-task-btn');

    function construct(){
    bindEvent();
    scanTaskList();
    }
  
   function buildTask(){
    let taskListItem, taskCheckBox, taskValue, taskButton, taskTrash;
    taskListItem = document.createElement('li');
    taskListItem.setAttribute('class', 'task');
    taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute('type','checkbox');
    taskValue = document.createTextNode(taskInput.value);
    taskButton = document.createElement('button');
    taskTrash = document.createElement('i');
    taskButton.className = 'btn-trash';
    taskTrash.setAttribute('class','fa fa-trash');
    taskButton.appendChild(taskTrash);
    taskListItem.appendChild(taskCheckBox);
    taskListItem.appendChild(taskValue);
    taskListItem.appendChild(taskButton);
    taskList.appendChild(taskListItem);
  }
  // error: function(){
  //   errorMessage.style.display = 'block';
  // },
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
    let taskListItem, checkBox, deleteButton;
    for( let i = 0; i< taskListChildren.length; i++){
      taskListItem = taskListChildren[i];
      checkBox = taskListItem.getElementsByTagName('input')[0];
      deleteButton = taskListItem.getElementsByTagName('button')[0];
      checkBox.onclick = completeTask.bind( taskListItem, checkBox);
      deleteButton.onclick = deleteTask.bind( i);

    }
  }
  function deleteTask(i){
    taskListChildren[i].remove();
    scanTaskList();
  }
 function  completeTask(taskListItem, checkBox){
    if(checkBox.checked){
      taskListItem.className = 'task completed';
    } else {
      incompleteTask(taskListItem);
    }
  }
  function incompleteTask(taskListItem){
    taskListItem.className = 'task';
  }
  return { construct }
}
const todo = Tasker();
todo.construct();