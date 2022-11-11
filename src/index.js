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


// states===========================
// need of state
// props cannot be changed
//In order to allow components to manage and change their data, 
// React provides a feature called state.

// State is object that is added as a property in class components.

// class DemoClass extends React.Component {

//     //state(object)
//     //state is just a simple object , that
//     // contains a key: value pairs
//     state = {
//         name: "vinay",
//         age: 22,
//     }
//     render() {

//         return <h1>Name : {this.state.name}.<br></br> Age: {this.state.age}</h1>;
//     }
// }

// ReactDOM.render(<DemoClass />, document.getElementById("root"));

// setState() method ===================================
//state should not be modified directly.Instead,React provide the 
// setState() method to modify the state.


//Counter App with setState() method

class Counter extends React.Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return <div className='container'>
            {this.state.counter}
            <button onClick={this.increment}>Increment</button>
        </div>
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));

// export default Show;