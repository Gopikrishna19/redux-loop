function reduce(state) {
  return state;
}

export default function (state, action) {
  return {
    meta: Object.assign({}, state.meta, {
      grandTotal: reduce(state, action)
    })
  }
}
