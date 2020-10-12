const Clear = () => {
  function clearPrevious(projectList) {
    while (projectList.firstChild) {
      projectList.removeChild(projectList.firstChild);
    }
  }
  return { clearPrevious };
};
export default Clear;