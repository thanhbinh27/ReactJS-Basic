import { Component } from "react";
import Picture from "../Picture";
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { left: 0, center: 1, right: 2 };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let left = this.state.left === this.props.pics.length - 1 ? 0 : this.state.left + 1;
        let center = this.state.center === this.props.pics.length - 1 ? 0 : this.state.center + 1;
        let right = this.state.right === this.props.pics.length - 1 ? 0 : this.state.right + 1;

        this.setState({ left: left, center: center, right: right });
    }

    render() {
        return (
            <>
                <Picture value={this.props.pics[this.state.left]} className="left" />
                <Picture value={this.props.pics[this.state.center]} className="center" />
                <Picture value={this.props.pics[this.state.right]} className="right" />
            </>
        );
    }
}