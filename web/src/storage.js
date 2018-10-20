export function addChecklist(checklist) {
  const checklistId = localStorage.getItem('checklists-num');
  localStorage.setItem(`checklist-${checklistId}`, JSON.stringify(checklist));
  localStorage.setItem('checklists-num', `${checklistId + 1}`);
  return checklistId;
}

export function deleteChecklist(checklistId) {
  localStorage.removeItem(`checklist-${checklistId}`);
  const checklistsNum = localStorage.getItem('checklists-num');
  localStorage.setItem('checklists-num', `${checklistsNum - 1}`);
}

export function getChecklist(checklistId) {
  return JSON.parse(localStorage.getItem(`checklist-${checklistId}`));
}

export function modifyChecklist(checklistId, checklist) {
  localStorage.setItem(`checklist-${checklistId}`, JSON.stringify(checklist));
}
