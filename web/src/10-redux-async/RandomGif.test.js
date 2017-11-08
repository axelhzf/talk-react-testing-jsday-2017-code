import React from 'react';
import { RandomGifContainer, reducer } from './RandomGif';
import { applyMiddleware, createStore } from 'redux';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import _ from 'lodash';

const mock = new MockAdapter(axios);

describe('10-redux-async', () => {

  beforeEach(() => {
    mock.reset();
  });

  it('should render on fetch success', async () => {
    const observer = new ReduxObserver();
    const store = createStore(reducer, applyMiddleware(thunk, observer.middleWare));

    mock.onAny().reply(config => {
      const body = {
        data: {
          giphy: {
            random: {
              images: {
                original: {
                  url: 'https://media2.giphy.com/media/2HONNTJbRhzKE/giphy.gif'
                }
              }
            }
          }
        }
      };
      return [200, body];
    });

    const wrapper = mount(
      <Provider store={store}>
        <RandomGifContainer/>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();

    await observer.waitForActionType('FETCH_GIF_SUCCESS');
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render on fetch error', async () => {
    const observer = new ReduxObserver();
    const store = createStore(reducer, applyMiddleware(thunk, observer.middleWare));

    mock.onAny().reply(500);

    const wrapper = mount(
      <Provider store={store}>
        <RandomGifContainer/>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();

    await observer.waitForActionType('FETCH_GIF_ERROR');
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});

class ReduxObserver {

  snapshots = [];
  pendingPromises = {}

  middleWare = store => next => action => {
    const state = store.getState();
    next(action);
    const nextState = store.getState();

    this.snapshots.push({ state, action, nextState });

    const pendingPromise = this.pendingPromises[action.type];
    if (pendingPromise) pendingPromise();

    return nextState;
  }

  waitForActionType (actionType) {
    return new Promise((resolve) => {
      const action = _.find(this.snapshots, ({ action }) => action.type === actionType);
      if (action) return resolve();
      this.pendingPromises[actionType] = resolve;
    });
  }

}
