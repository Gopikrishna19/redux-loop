function setData(state, {data}) {
  return data;
}

const defaultReducer = state => state;
const reducers = {
  SET_DATA: setData
};

export default function (state = {}, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}