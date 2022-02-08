import React from 'react';
import './styles/Buttons.css';

/*
    size: outline, small, large (default)
    color: light, dark (default)
*/
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }

        this.className = this.getClassName(props, props);
    }

    getClassName(props) {
        var className = "button button-text";
        if (props.outline) {
            className +=" button-outline"
        } else if (props.light) {
            className +=" button-small"
        } else {
            className +=" button-large"
        }

        if (props.light) {
            className += " button-light";
        } else {
            className +=" button-dark"
        }

        return className;
    }

    render() {
        return (
            <input className={this.className} type="button" value={this.state.value} />
        )
    }
}

export default Button;