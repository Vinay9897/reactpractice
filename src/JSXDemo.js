import React from 'react';
// // import ReactDOM from "react-dom";
import ReactDOM from 'react-dom';
export default class JSXDemo extends React {
    render() {
        return (
            <h1>This is Vinay</h1>
        )
        // const jsx = <h1> this is jsx</h1>
    }

}
ReactDOM.render(<JSXDemo />, document.getElementById("root"));

