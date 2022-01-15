import { Component } from "react";

export default class Temperature extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }

    handleInputChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }
    
    render() {
        const temperature = this.props.value;
        const type = this.props.type;

        return (
            <fieldset>
                <legend>Enter temperature in {type}</legend>
                <input value={temperature} onChange={this.handleInputChange} />
            </fieldset>
        );
    }
}