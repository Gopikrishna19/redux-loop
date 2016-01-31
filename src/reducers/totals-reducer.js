function sanitize(number) {
  return parseFloat(number.toFixed(2));
}

function setTotals(meta) {

  return {
    amountOwed: sanitize(meta.parts.amountOwed + meta.miscItems.amountOwed),
    payAmount: sanitize(meta.parts.payAmount + meta.miscItems.payAmount)
  };

}

const defaultReducer = meta => meta;
const reducers = {
  SET_DATA: setTotals,
  TOGGLE_ALL: setTotals,
  TOGGLE_ITEM: setTotals
};

function reduce(meta, action) {
  return (reducers[action.type] || defaultReducer)(meta, action);
}

export default function (state, action) {
  return {
    meta: Object.assign({}, state.meta, {
      grandTotal: reduce(state.meta, action)
    })
  }
}
