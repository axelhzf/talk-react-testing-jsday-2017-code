import React from 'react';
import { CounterContainer, createDefaultStore, reducer } from './Counter';
import { mount } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

describe('09-redux', () => {
  it('should render initial state', () => {
    const store = createDefaultStore();
    const wrapper = mount(
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render increment', () => {
    const store = createDefaultStore();
    const wrapper = mount(
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
    wrapper.find('.increment').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render decrement', () => {
    const store = createDefaultStore();
    const wrapper = mount(
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
    wrapper.find('.decrement').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should update redux state using a log middleware', () => {
    const states = [];
    const logMiddleware = store => next => action => {
      const state = store.getState();
      next(action);
      const nextState = store.getState();
      states.push({ state, action, nextState });
      return nextState;
    };

    const store = createStore(reducer, applyMiddleware(logMiddleware));

    const wrapper = mount(
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
    wrapper.find('.decrement').simulate('click');
    wrapper.find('.decrement').simulate('click');
    wrapper.find('.increment').simulate('click');

    expect(states).toEqual([
      {
        state: { counter: 0 },
        action: { type: 'DECREMENT' },
        nextState: { counter: -1 }
      },
      {
        state: { counter: -1 },
        action: { type: 'DECREMENT' },
        nextState: { counter: -2 }
      },
      {
        state: { counter: -2 },
        action: { type: 'INCREMENT' },
        nextState: { counter: -1 }
      }
    ]);
  });
});
