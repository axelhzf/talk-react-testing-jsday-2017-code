import { add, multiply } from './lib';

describe('00-jest', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(2, 3)).toEqual(5);
    });
  });
  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(2, 3)).toEqual(6);
    });
  });
});
