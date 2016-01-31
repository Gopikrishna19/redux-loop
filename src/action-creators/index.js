export const setData = data => ({
  type: 'SET_DATA',
  data
});

export const toggleAll = (selection, sourceType)=> ({
  type: 'TOGGLE_ALL',
  selection,
  sourceType
});

export const toggleItem = (index, sourceType) => ({
  type: 'TOGGLE_ITEM',
  index,
  sourceType
});
