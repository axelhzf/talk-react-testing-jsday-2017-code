import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { Button } from './Button';

describe('04-props', () => {
  it('should render a button', () => {
    const renderer = ReactTestRenderer.create(<Button label="Click me"/>);
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('should render a disabled button', () => {
    const renderer = ReactTestRenderer.create(<Button label="Disabled" disabled/>);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});