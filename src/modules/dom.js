const el = (() => {
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
  const priority = document.querySelector('input[name="priority"]:checked');
  return {
    taskInput,
    taskDescription,
    taskDate, 
    taskList, 
    projectList, 
    deleteProjectBtn, 
    projectTitle, 
    aside,
    newProject, 
    newTask, 
    priority
  };
})()
export default el;