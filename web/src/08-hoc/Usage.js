import React from 'react';
import withLabel from './withLabel';
import './style.css';

export default class Usage extends React.Component {
  state = {
    value: ''
  };

  render() {
    return (
      <div>
        <h2>08-hoc</h2>
        <InputWithLabel
          label="Input"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <SelectWithLabel label="Select" />
      </div>
    );
  }
}

const Input = ({ value, onChange }) => (
  <input type="text" className="input" value={value} onChange={onChange} />
);

const InputWithLabel = withLabel(Input);

const Select = () => (
  <select className="select">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
);

const SelectWithLabel = withLabel(Select);
