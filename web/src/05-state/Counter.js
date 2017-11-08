import React from 'react';

export class Counter extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ value: this.state.value + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}
