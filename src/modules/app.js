import '../css/style.css';

import LocalSaver from './localDb';

import Project from './project';

import Todo from './todo';
function Tasker() {
  const deleteProjectBtn = document.querySelector('[data-delete-project]');
  const localstore = LocalSaver();
  const project = Project();
  const todo = Todo();
  function deleteProject(){
    localstore.lists = localstore.lists.filter(list => list.id !== localstore.selectedListId);
    localstore.selectedListId = null;
    localstore.save();
    project.addProject();
  }
  deleteProjectBtn.addEventListener('click', deleteProject)

  project.addProject();

  function construct() {
    todo.bindEvent();
  }
  return { construct };
}
const todo = Tasker();
todo.construct();