function LocalSaver(){
  
  const LIST_KEY = 'task.lists';
  const SELECTED_ID_KEY = 'task.selectedListId';
  let lists = JSON.parse(localStorage.getItem(LIST_KEY)) || [];
  let selectedListId = localStorage.getItem(SELECTED_ID_KEY);
  function save() {
    localStorage.setItem(LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(SELECTED_ID_KEY, selectedListId);
  }
  return { save, lists , selectedListId };
}
export default LocalSaver ;