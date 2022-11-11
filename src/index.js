import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// function Component===================


// function Show() {
//     const name = "Vinay";
//     return <h1>hello {name}</h1>;
// }
// ReactDOM.render(<Show />, document.getElementById('root'));


// class Hello extends React.Component {
//     render() {
//         return <h1>Hello World</h1>;
//     }
// }
// const el = <Hello />;
// ReactDOM.render(
//     el,
//     document.getElementById('root')
// );


//props================

// function Hello(props) {
//     return <p> Hi, {props.name}</p>
// }
// ReactDOM.render(<Hello name="Vinay" />, document.getElementById("root"));


//Component returning components=====================

// function App() {
//     return <div>
//         <Hello name="vinay" />
//         <Show />
//     </div>
// }
// const el = <App />;
// ReactDOM.render(el, document.getElementById("root"));


// props with Class component======================

// class Buy extends React.Component {
//     render() {
//         return <p> Hi , {this.props.name}</p>
//     }
// }
// const el = <Buy name="Rahul" />;
// ReactDOM.render(el, document.getElementById('root'));



// export default Show;