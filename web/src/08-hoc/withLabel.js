import React from 'react';
import './style.css';

export default function withLabel(Component) {
  return class WithLabel extends React.Component {
    render() {
      const { label, ...other } = this.props;
      return (
        <div className="withLabel">
          <label>{this.props.label}</label>
          <div className="content">
            <Component {...other} />
          </div>
        </div>
      );
    }
  };
}
