import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from './Counter';
import _ from 'lodash';

jest.useFakeTimers();

describe('07-render-prop', () => {
  it('should render the initial value with 0', () => {
    const wrapper = shallow(
      <Counter render={({ value }) => <div>{value}</div>} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should reset the counter', () => {
    const wrapper = shallow(
      <Counter
        render={({ value, reset }) => (
          <div>
            <div>{value}</div>
            <button onClick={reset}>reset</button>
          </div>
        )}
      />
    );
    jest.runTimersToTime(5000);
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
