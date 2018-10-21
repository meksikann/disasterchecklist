const ACTIVE_STORAGE_KEY = "active";
const CHECKLISTS_STORAGE_KEY = "checklists";
const TAKEN_ITEMS_STORAGE_KEY = "taken_items";

try {
  let data = JSON.parse(localStorage.getItem(CHECKLISTS_STORAGE_KEY)) || [];
  data = data.filter(checklist => checklist.title && checklist.items && checklist.id);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, JSON.stringify(data));
} catch (err) {
  console.error(err);
}
try {
  let data = JSON.parse(localStorage.getItem(TAKEN_ITEMS_STORAGE_KEY)) || [];
  data = data.filter(takenItem => typeof takenItem === 'string');
  localStorage.setItem(TAKEN_ITEMS_STORAGE_KEY, JSON.stringify(data));
} catch (err) {
  console.error(err);
}

export function addChecklist(checklist) {
  const data = getChecklists();
  const checklistToSave = {
    ...checklist,
  };
  checklistToSave.id = data.length > 0 ? parseInt(data[data.length - 1].id, 10) + 1 : 1;
  data.push(checklistToSave);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, JSON.stringify(data));
  return checklistToSave.id;
}

export function addChecklistItem(checklistId, checklistItem) {
  let data = getChecklists();
  const checklist = data.find(checklist => checklist.id === checklistId) || {
    title: 'Empty',
    items: [],
    id: getNextId(),
  };
  checklist.items.push(checklistItem);
  data = data.filter(checklist => checklist.id !== checklistId);
  data.push(checklist);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, JSON.stringify(data));
}

export function addTakenItem(takenItem) {
  const takenItems = getTakenItems();
  takenItems.push(takenItem);
  localStorage.setItem(TAKEN_ITEMS_STORAGE_KEY, JSON.stringify(takenItems));
}

export function deleteChecklist(checklistId) {
  let data = getChecklists();
  data = data.filter(checklist => checklist.id !== checklistId);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, JSON.stringify(data));
}

export function getChecklist(checklistId) {
  const data = getChecklists();
  return data.find(checklist => checklist.id === checklistId);
}

export function getChecklists(){
  try {
    const data = JSON.parse(localStorage.getItem(CHECKLISTS_STORAGE_KEY));
    if (!data.push) return [];
    return data;
  } catch (err) {
    return [];
  }
}

export function getNextId() {
  try {
    const data = getChecklists();
    return data.length + 1;
  } catch (err) {
    return 1;
  }
}

export function getTakenItems() {
  try {
    const takenItems = JSON.parse(localStorage.getItem(TAKEN_ITEMS_STORAGE_KEY));
    if (!takenItems.push) return [];
    return takenItems;
  } catch (err) {
    return [];
  }
}

export function isItemTaken(item) {
  return getTakenItems().includes(item);
}

export function modifyChecklist(checklist) {
  const data = getChecklists();
  Object.assign(data.find(checklistItem => checklistItem.id === checklist.id), checklist);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, JSON.stringify(data));
  const active = JSON.parse(localStorage.getItem(ACTIVE_STORAGE_KEY));
  if(active.id === checklist.id) {
    localStorage.setItem(ACTIVE_STORAGE_KEY, JSON.stringify(checklist));
  }

}


export function removeChecklistItem(checklistId, checklistItem) {
  let data = getChecklists();
  const checklist = data.find(checklist => checklist.id === checklistId) || {
    title: 'Empty',
    items: [],
    id: getNextId(),
  };
  checklist.items.push(checklistItem);
  data = data.filter(checklist => checklist.id !== checklistId);
  data.push(checklist);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, JSON.stringify(data));
}

export function removeTakenItem(notTakenItem) {
  let takenItems = getTakenItems();
  takenItems = takenItems.filter(takenItem => takenItem !== notTakenItem);
  localStorage.setItem(TAKEN_ITEMS_STORAGE_KEY, JSON.stringify(takenItems));
}

export function setActiveChecklist(checklistId) {
  const data = getChecklists();
  const checklist = data.find(checklist => checklist.id === checklistId);
  localStorage.setItem(ACTIVE_STORAGE_KEY, JSON.stringify(checklist));
}
