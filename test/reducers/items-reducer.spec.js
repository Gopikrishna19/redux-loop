import {expect} from 'chai';

import reducer from '../../src/reducers/items-reducer';

describe('service', () => {

  const state = [
    {
      selected: true
    },
    {
      selected: false
    },
    {
      selected: true
    }
  ];

  deepFreeze(state);

  it('should set items', () => {

    const action = {
      type: 'SET_ITEMS',
      items: state
    };

    expect(reducer(undefined, action)).to.eql(state);

  });

  it('should toggle all items to true', () => {

    const action = {
      type: 'TOGGLE_ALL',
      selection: true
    };
    const nextState = [
      {
        selected: true
      },
      {
        selected: true
      },
      {
        selected: true
      }
    ];

    expect(reducer(state, action)).to.eql(nextState);

  });

  it('should toggle all items to false', () => {

    const action = {
      type: 'TOGGLE_ALL',
      selection: false
    };
    const nextState = [
      {
        selected: false
      },
      {
        selected: false
      },
      {
        selected: false
      }
    ];

    expect(reducer(state, action)).to.eql(nextState);

  });

  it('should toggle a single item at given index', () => {

    const action = {
      type: 'TOGGLE_ITEM',
      index: 0
    };
    const nextState = [
      {
        selected: false
      },
      {
        selected: false
      },
      {
        selected: true
      }
    ];

    expect(reducer(state, action)).to.eql(nextState);

  });

});