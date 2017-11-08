import React from 'react';
import { mount, shallow } from 'enzyme';
import { Counter } from './Counter';
import { mountToJson } from 'enzyme-to-json';

jest.useFakeTimers();

describe('05-state', () => {
  it('should update the internal state', () => {
    const wrapper = shallow(<Counter />);
    jest.runTimersToTime(5000);
    expect(wrapper.state()).toEqual({ value: 5 });
  });

  it('should render a counter', () => {
    const wrapper = mount(<Counter />);
    jest.runTimersToTime(5000);
    wrapper.update();
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
