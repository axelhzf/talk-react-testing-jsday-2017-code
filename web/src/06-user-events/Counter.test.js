import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from './Counter';

jest.useFakeTimers();

describe('06-user-events', () => {
  it('should reset the counter when button is clicked', () => {
    const wrapper = shallow(<Counter />);
    jest.runTimersToTime(5000);

    wrapper.update();
    expect(wrapper).toMatchSnapshot();

    wrapper.find('button').simulate('click');
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should reset the when the user press r', () => {
    const wrapper = shallow(<Counter />);
    jest.runTimersToTime(5000);

    wrapper.update();
    expect(wrapper).toMatchSnapshot();

    wrapper.find('.container').simulate('keyPress', { key: 'r' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});
