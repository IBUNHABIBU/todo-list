import '../css/style.css';

import Project from './project';

function Tasker() {
  const project = Project();
  function construct() {
    project.bindEvent();
  }
  project.addProject();
  return { construct };
}
const todo = Tasker();
todo.construct();