const CHECKLISTS_STORAGE_KEY = "checklists";

export function addChecklist(checklist) {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(CHECKLISTS_STORAGE_KEY))
  } catch (err) {
    data = []
  }
  const checklistToSave = { ...checklist
  };
  checklistToSave.id = data.length > 0 ? parseInt(data[data.length - 1].id, 10) + 1 : 1;
  data.push(checklistToSave);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, JSON.stringify(data));
  return checklistToSave.id;
}

export function addChecklistItem(checklistId, checklistItem) {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(CHECKLISTS_STORAGE_KEY))
  } catch (err) {
    data = []
  }
  const checklist = data.find(checklist => checklist.id === checklistId) || {
    title: 'Empty',
    items: []
  };
  checklist.items.push(checklistItem);
  data = data.filter(checklist => checklist.id !== checklistId);
  data.push(checklist);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, JSON.stringify(data));
}

export function deleteChecklist(checklistId) {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(CHECKLISTS_STORAGE_KEY))
  } catch (err) {
    data = []
  }
  data = data.filter(checklist => checklist.id !== checklistId);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, JSON.stringify(data));
}

export function getChecklist(checklistId) {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(CHECKLISTS_STORAGE_KEY))
  } catch (err) {
    data = []
  }
  return data.find(checklist => checklist.id === checklistId);
}
