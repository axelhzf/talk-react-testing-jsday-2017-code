import React, { Component } from 'react';
import './App.css';
import Props from './04-props/Usage';
import State from './05-state/Usage';
import UserEvents from './06-user-events/Usage';
import RenderProp from './07-render-prop/Usage';

class App extends Component {
  render() {
    return (
      <div>
        <Props />
        <State />
        <UserEvents />
        <RenderProp />
      </div>
    );
  }
}

export default App;
