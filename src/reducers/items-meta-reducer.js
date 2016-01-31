function sanitize(number) {
  return parseFloat(number.toFixed(2));
}

function getAdjustedPayAmount(item, meta) {
  return sanitize(meta.payAmount + ((item.selected ? 1 : -1) * item.payAmount));
}

function getTotalAmountOwed(items) {
  return sanitize(items.reduce((sum, item) => item.amountOwed + sum, 0));
}

function getTotalPayAmount(items) {
  return sanitize(items.reduce((sum, item) => item.selected ? item.amountOwed + sum : sum, 0));
}

function isEveryItemSelected(items) {
  return !items.some(item => !item.selected);
}

function setMetaData(items) {

  return {
    allSelected: isEveryItemSelected(items),
    amountOwed: getTotalAmountOwed(items),
    payAmount: getTotalPayAmount(items)
  }

}

function toggleAll(items, meta, action) {

  return Object.assign({}, meta, {
    allSelected: action.selection,
    payAmount: getTotalPayAmount(items)
  });

}

function toggleItem(items, meta, action) {

  return Object.assign({}, meta, {
    allSelected: action.selection && isEveryItemSelected(items),
    payAmount: getAdjustedPayAmount(items[action.index], meta)
  });

}

const defaultReducer = items => items;
const reducers = {
  SET_DATA: setMetaData,
  TOGGLE_ALL: toggleAll,
  TOGGLE_ITEM: toggleItem
};

function reduce(items, meta, action) {
  return (reducers[action.type] || defaultReducer)(items, meta, action);
}

export default function (state = {}, action) {

  state.meta = state.meta || {};

  return {
    meta: {
      parts: reduce(state.parts, state.meta.parts, action),
      miscItems: reduce(state.miscItems, state.meta.miscItems, action)
    }
  };

}
