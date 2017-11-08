import React, { Component } from 'react';
import './App.css';
import Props from './04-props/Usage';
import State from './05-state/Usage';
import UserEvents from './06-user-events/Usage';
import RenderProp from './07-render-prop/Usage';
import HOC from './08-hoc/Usage';
import Redux from './09-redux/Usage';
import ReduxAsync from './10-redux-async/Usage';

class App extends Component {
  render() {
    return (
      <div>
        <Props />
        <State />
        <UserEvents />
        <RenderProp />
        <HOC />
        <Redux />
        <ReduxAsync />
      </div>
    );
  }
}

export default App;
