import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { Message } from './Message';

describe('02-jsx', () => {
  it('should render a message', () => {
    const renderer = ReactTestRenderer.create(<Message />);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
