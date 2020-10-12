const Clear = () => {
  const projectList = document.querySelector('.project-list');
  function clearPrevious(projectList) {
    while (projectList.firstChild) {
      projectList.removeChild(projectList.firstChild);
    }
  }
  return { clearPrevious };
}
export default Clear;