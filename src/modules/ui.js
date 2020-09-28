let tasker = {
  construct: function(){
    this.selectedElement();
    this.bindEvent();
    this.scanTaskList();
  },
  selectedElement: function (){
    this.taskInput = document.getElementById('input-task');
    this.taskList = document.getElementById('tasks');
    this.taskListChildren = this.taskList.children;
    this.addButton = document.getElementById('add-task-btn');
    this.errorMessage = document.getElementById('error');
  },
  buildTask: function(){
    let taskListItem, taskCheckBox, taskValue, taskButton, taskTrash;
    taskListItem = document.createElement('li');
    taskListItem.setAttribute('class', 'task');
    taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute('type','checkbox');
    taskValue = document.createTextNode(this.taskInput.value);
    taskButton = document.createElement('button');
    taskTrash = document.createElement('i');
    taskButton.className = 'btn-trash';
    taskTrash.setAttribute('class','fa fa-trash');
    taskButton.appendChild(taskTrash);
    taskListItem.appendChild(taskCheckBox);
    taskListItem.appendChild(taskValue);
    taskListItem.appendChild(taskButton);
    this.taskList.appendChild(taskListItem);
  }, 
  error: function(){
    this.errorMessage.style.display = 'block';
  },
  addTask: function() {
    let taskValue = this.taskInput.value;
    this.errorMessage.style.display = 'none';
    if(taskValue === ''){
      this.error();
    } else {
      this.buildTask();
      this.taskInput.value = '';
      this.scanTaskList();
    }
  }, 
  enterKey: function(e){
    if(e.keyCode === 13 ){
      this.addTask();
    }
  }, 
  bindEvent: function(){
    this.addButton.onclick= this.addTask.bind(this);
    this.taskInput.onkeypress = this.enterKey.bind(this);
  }, 
  scanTaskList: function(){
    let taskListItem, checkBox, deleteButton;
    for( i = 0; i< this.taskListChildren.length; i++){
      taskListItem = this.taskListChildren[i];
      checkBox = taskListItem.getElementsByTagName('input')[0];
      deleteButton = taskListItem.getElementsByTagName('button')[0];
      checkBox.onclick = this.completeTask.bind(this, taskListItem, checkBox);
      deleteButton.onclick = this.deleteTask.bind(this, i);

    }
  },
  deleteTask: function(i){
    this.taskListChildren[i].remove();
    this.scanTaskList();
  }, 
  completeTask: function(taskListItem, checkBox){
    if(checkBox.checked){
      taskListItem.className = 'task completed';
    } else {
      this.incompleteTask(taskListItem);
    }
  },
  incompleteTask: function(taskListItem){
    taskListItem.className = 'task';
  }
}