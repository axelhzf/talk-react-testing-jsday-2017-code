import React from 'react';
import { shallow } from 'enzyme';
import withLabel from './withLabel';

describe('08-hoc', () => {
  it('should render the component', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <InputWithLabel value="Luke skywalker" onChange={onChange} label="Name" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

const Input = ({ value, onChange }) => (
  <input type="text" className="input" value={value} onChange={onChange} />
);
const InputWithLabel = withLabel(Input);
