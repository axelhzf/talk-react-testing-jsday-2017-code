import * as React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string
  }

  render () {
    const { disabled, label } = this.props;
    return <button disabled={disabled}>{label}</button>
  }
}
