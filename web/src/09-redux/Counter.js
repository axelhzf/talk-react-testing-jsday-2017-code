import React from 'react';
import { combineReducers, createStore } from 'redux';
import { connect } from 'react-redux';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export const reducer = combineReducers({
  counter: counterReducer
});

const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

export const createDefaultStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

function Counter({ value, increment, decrement }) {
  return (
    <div>
      <div>{value}</div>
      <button className="increment" onClick={increment}>
        +1
      </button>
      <button className="decrement" onClick={decrement}>
        -1
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.counter
});

export const CounterContainer = connect(mapStateToProps, {
  increment,
  decrement
})(Counter);
