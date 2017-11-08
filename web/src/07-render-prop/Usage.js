import React from 'react';
import { Counter } from './Counter';
import './style.css';

export default () => (
  <div>
    <h2>07-render-prop</h2>
    <Counter
      render={({ value, reset }) => (
        <div className="counter1">
          <h1>{value}</h1>
          <button onClick={reset}>Reset!</button>
        </div>
      )}
    />
    <Counter
      render={({ value, reset }) => (
        <div className="counter2">
          <button onClick={reset}>Click to reset</button>
          <h1>{value} seconds</h1>
        </div>
      )}
    />
  </div>
);
