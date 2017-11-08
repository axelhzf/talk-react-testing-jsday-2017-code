import React from 'react';
import { RandomGifContainer, createDefaultStore } from './RandomGif';
import { Provider } from 'react-redux';

const store = createDefaultStore();

export default () => (
  <div>
    <h2>10-redux-async</h2>
    <Provider store={store}>
      <RandomGifContainer />
    </Provider>
  </div>
);
