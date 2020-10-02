
   function renderTasks(selectedProject){
    selectedProject.tasks.forEach( task => {
    let taskListItem, taskCheckBox,  taskButton, taskTrash;
    taskListItem = document.createElement('li');
    taskListItem.setAttribute('class', 'task');
    taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute('type','checkbox');
    const taskElement = document.createElement('span');
    const descriptionElement = document.createElement('span');
    const dateElement = document.createElement('span');
    taskButton = document.createElement('button');
    taskTrash = document.createElement('i');
    taskButton.className = 'btn-trash';
    taskTrash.setAttribute('class','fa fa-trash');
    const priorityElement = document.createElement('span');
    taskListItem.appendChild(taskCheckBox);
    taskListItem.appendChild(taskElement);
    taskListItem.appendChild(descriptionElement);
    descriptionElement.innerHTML = task.description;
    taskButton.appendChild(taskTrash);
    taskListItem.appendChild(dateElement)
    taskListItem.appendChild(priorityElement)
    taskListItem.appendChild(taskButton);
    taskList.appendChild(taskListItem);
    dateElement.innerHTML = task.date;
    priorityElement.innerHTML = task.priority;
    taskElement.innerHTML = task.title;
    });
   }
   function buildTask(){
    let taskValue = taskInput.value;
    const descriptionValue = taskDescription.value;
    const dateValue = taskDate.value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const task = createTask(taskValue,descriptionValue,dateValue,priority)
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks.push(task)
  }
  function createTask(title, description, date, priority){
    return { title: title, description: description, date: date, priority: priority}
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
  export default renderTasks;