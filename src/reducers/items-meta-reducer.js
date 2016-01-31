function reduce(state) {
  return state;
}

export default function (state, action) {

  return {
    meta: {
      parts: reduce(state.parts, action),
      miscItems: reduce(state.miscItems, action)
    }
  };

}
