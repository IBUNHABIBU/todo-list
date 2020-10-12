import '../css/style.css';

import LocalSaver from './localDb';

import Clear from './clear';

import Project from './project';

function Tasker() {

  const taskInput = document.getElementById('title');
  const taskDescription = document.getElementById('description');
  const taskDate = document.getElementById('datetime');
  const newTask = document.querySelector('[data-task-form]');
  const localstore = LocalSaver();
  const project = Project();

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
    project.addProject();
  }


 
  function bindEvent() {
    newTask.addEventListener('submit',buildTask);
  }


  project.addProject();

  function construct() {
    bindEvent();
  }
  return { construct };
}
const todo = Tasker();
todo.construct();