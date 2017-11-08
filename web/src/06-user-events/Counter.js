import React from 'react';

export class Counter extends React.Component {

  state = {
    value: 0
  }

  componentDidMount () {
    this.startInterval()
  }

  componentWillUnmount () {
    this.stopInterval();
  }

  resetInterval() {
    this.setState({ value: 0 });
    this.stopInterval();
    this.startInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.setState({ value: this.state.value + 1 });
    }, 1000);
  }

  stopInterval() {
    if (this.interval) clearInterval(this.interval);
  }

  handleResetClick = () => this.resetInterval();

  handleKeyPress = (e) => {
    if (e.key === 'r') {
      this.resetInterval();
    }
  }

  render () {
    return (
      <div className="container" tabIndex={0} onKeyPress={this.handleKeyPress}>
        <div>{this.state.value}</div>
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    )
  }
}