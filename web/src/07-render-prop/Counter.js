import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
  static propTypes = {
    render: PropTypes.func
  };

  state = {
    value: 0
  };

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
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

  render() {
    const { render } = this.props;
    return (
      <div>
        {render({
          value: this.state.value,
          reset: this.handleResetClick
        })}
      </div>
    );
  }
}
