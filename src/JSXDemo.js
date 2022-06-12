import React from 'react';
// // import ReactDOM from "react-dom";
import ReactDOM from 'react-dom';
export default class JSXDemo extends React {
    // render() {
    //     // return (
    //     //     <h1>This is Vinay</h1>
    //     // )
    //     // const jsx = <h1> this is jsx</h1>

    // }

    //  using React.createElement
    render() {
        return React.createElement("h1", null, "This is Vinay");
    }

}
ReactDOM.render(<JSXDemo />, document.getElementById("root"));

