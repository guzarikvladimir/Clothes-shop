import React from 'react';
import './styles/Select.css';

class Select extends React.Component {
  static Option = function({ checked, disabled, value, name }) {

    return (
        <div>
            <input type="radio" name={name} value={value} checked={checked} disabled={disabled} />
        </div>
    )
  };

  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return (
        <div onChange={this.onChangeValue}>
            {this.props.children}
        </div>
    );
  }
}

export default Select;