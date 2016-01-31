function toggleAll(items, {selection}) {
  return items.map(item => Object.assign({}, item, {selected: selection}));
}

function toggleItem(items, {index}) {

  const item = items[index];

  return [
    ...items.slice(0, index),
    Object.assign({}, item, {selected: !item.selected}),
    ...items.slice(index + 1)
  ];

}

const defaultReducer = items => items;
const reducers = {
  TOGGLE_ALL: toggleAll,
  TOGGLE_ITEM: toggleItem
};

function reduce(items = [], action, itemsType) {

  if (itemsType !== action.sourceType) {
    return items;
  }
  return (reducers[action.type] || defaultReducer)(items, action);

}

export default function (state, action) {

  return {
    parts: reduce(state.parts, action, "parts"),
    miscItems: reduce(state.miscItems, action, "miscItems")
  };

}
