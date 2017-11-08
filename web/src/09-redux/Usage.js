import React from 'react';
import { CounterContainer, createDefaultStore } from './Counter';
import { Provider } from 'react-redux';

const store = createDefaultStore();
export default () => (
  <div>
    <h2>09-redux</h2>
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  </div>
);
