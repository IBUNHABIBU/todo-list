const Data = (() => {
  const LIST_KEY = 'task.lists';
  const SELECTED_ID_KEY = 'task.selectedListId';
  const lists = JSON.parse(localStorage.getItem(LIST_KEY)) || [];
  const selectedListId = localStorage.getItem(SELECTED_ID_KEY);
  const save = () => {
    localStorage.setItem(LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(SELECTED_ID_KEY, selectedListId);
  };

  return { save, lists, selectedListId };
})
export default Data;