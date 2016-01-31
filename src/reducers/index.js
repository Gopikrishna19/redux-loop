import {combineReducers} from 'redux';

import dataReducer from './data-reducer';
import itemsReducer from './items-reducer';
import itemsMetaReducer from './items-meta-reducer';
import totalsReducer from './totals-reducer';

export default (state = {}, action) => {

  require('deep-freeze')(state);

  const reductions = [
    state,
    dataReducer,
    itemsReducer,
    itemsMetaReducer,
    totalsReducer
  ];

  return reductions.reduce(
    (prevState, reduction) =>
      Object.assign({}, prevState, reduction(prevState, action))
  );

};
