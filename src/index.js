import React, { useState, useEffect } from 'react';
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


//Counter App with setState() method=======================================

// class Counter extends React.Component {
//     state = {
//         counter: 0
//     }
//     increment = () => {
//         this.setState({
//             counter: this.state.counter + 1
//         });
//     }

//     render() {
//         return <div className='container'>
//             {this.state.counter}
//             <button onClick={this.increment}>Increment</button>
//         </div>
//     }
// }
// ReactDOM.render(<Counter />, document.getElementById('root'));



//Hooks ===================================
// It is feature of React allow to use state in the functional Components
// we need to import the useState hook

//useState()method
// return a pair , current state value and a function

// function Hello() {
//     const [name, setName] = useState("Vinay Yadav");
//     return <h1>Hello{name}</h1>;
// }
// ReactDOM.render(<Hello />, document.getElementById('root'));


//Counter App Using Hooks --> useState() method

// function Counter() {
//     const [counter, setCounter] = useState(0);

//     function increment() {
//         setCounter(counter + 1);
//     }
//     return <div className='container'>
//         <p>{counter}</p>
//         <button onClick={increment}>Increment</button>
//     </div>
// }
// ReactDOM.render(<Counter />, document.getElementById('root'));

// LifeCycle methods =============================================
// React provides special lifecycle methods for class Componets
// These method are called when components are
// mounted(rendered),updated(modify),unmounted(removed)
// lifeCycle methods
// componentDidMount(),componentWillUnmount(),componentDidUpdate()

// componentDidMount() method is called when a component is rendered  on the page.
// componentWillUnmount() method is called right before the component is removed from the DOM.
// componentDidUpdate() method is called when a component is updated on the DOM.

// class Counter extends React.Component {
//     state = {
//         counter: 0
//     }
//     increment = () => {
//         this.setState({ counter: this.state.counter + 1 })
//     }
//     componentDidMount() {
//         this.setState({ counter: 42 });
//     }
//     render() {
//         return <div className='container'>
//             <p>{this.state.counter}</p>
//             <button onClick={this.increment}>Increment</button>
//         </div>
//     }
// }
// ReactDOM.render(<Counter />, document.getElementById('root'));


//LifeCycle methods with Functional Componenets=========================
// React provide special Hook called "useEffect" to use LifeCycle method
// in Functional Components
// useEffect combine all lifecycle methods into one

// function Counter() {
//     const [counter, setCounter] = useState(0);

//     useEffect(() => {
//         alert("No of clicks : " + counter);
//     });
//     function increment() {
//         setCounter(counter + 1);
//     }

//     return <div className='container'>
//         <p>{counter}</p>
//         <button onClick={increment}>Increment</button>
//     </div>
// }
// ReactDOM.render(<Counter />, document.getElementById('root'));


// form===========================

function AddForm() {
    // state 1
    const [num, setNum] = useState(0);
    // state 2
    const [sum, setSum] = useState(0);

    //
    function handleChange(e) {
        setNum(e.target.value);
    }
    function addition(e) {
        setSum(sum + Number(num));
        e.preventDefault();
    }

    return <div className='container'>
        <form>
            <input type="number" value={num} onChange={handleChange}></input>
            <input type="submit" value="Add" onClick={addition}></input>
            <p>Sum is {sum}</p>
        </form>
    </div>
}
ReactDOM.render(<AddForm />, document.getElementById('root'));
// export default Counter;