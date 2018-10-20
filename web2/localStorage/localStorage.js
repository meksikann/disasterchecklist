const CHECKLISTS_STORAGE_KEY = "checklists";

export function addChecklist(checklist) {
  const data = localStorage.getItem(CHECKLISTS_STORAGE_KEY);
  const checklistToSave = { ...checklist
  };
  checklistToSave.id = data.length > 0 ? parseInt(data[data.length - 1].id, 10) + 1 : 1;
  data.push(checklistToSave);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, data);
  return checklistToSave.id;
}

export function addChecklistItem(checklistId, checklistItem) {
  let data = localStorage.getItem(CHECKLISTS_STORAGE_KEY);
  const checklist = data.find(checklist => checklist.id === checklistId) || {
    title: 'Empty',
    items: []
  };
  data = data.filter(checklist => checklist.id !== checklistId);
  data.push(checklist);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, data);
}

export function deleteChecklist(checklistId) {
  let data = localStorage.getItem(CHECKLISTS_STORAGE_KEY);
  data = data.filter(checklist => checklist.id !== checklistId);
  localStorage.setItem(CHECKLISTS_STORAGE_KEY, data);
}

export function getChecklist(checklistId) {
  let data = localStorage.getItem(CHECKLISTS_STORAGE_KEY);
  return data.find(checklist => checklist.id === checklistId);
}
