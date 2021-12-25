import { Component } from 'react';
import './style.css'

export default class Button extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    handle_click = () => {
        this.props.onHandleClick(this.props.value);
    }

    render() {
        const className = this.props.className === 'zero' ? this.props.className : "";
        return (
            <button type='button' class={className} onClick={this.handle_click} >
                {this.props.value}
            </button>
        );
    }
}