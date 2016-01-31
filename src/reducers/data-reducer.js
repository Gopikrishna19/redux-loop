function setData(state, {data}) {
  return {
    parts: data.parts,
    miscItems: data.miscItems
  };
}

const defaultReducer = items => items;
const reducers = {
  SET_DATA: setData
};

export default function (state = {}, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}