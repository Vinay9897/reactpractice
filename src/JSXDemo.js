import React, { Component } from 'react';

export default class JSXDemo extends Component {
    onvinay = () => {
        let v = prompt("Vinay is good boy");
        prompt(v);
    };
    render() {
        return (
            <React.Fragment>
                <h1> this is frist jsx </h1>
                <h1> this is second jsx </h1>
                <button id="btn" onClick={this.onvinay}> Click Here</button>
                < App1 />
            </React.Fragment>
        )
    }
}
const App1 = () => {
    return (
        <h1>New Class</h1>
    );
}

