import React from 'react'
import ReactDOM from 'react-dom'
// function Hello() {
//   return <p>{a + b}</p>;
// }
// const a = 10;
// const b = 10;
// ReactDOM.render(<Hello />, document.getElementById("root"));

// class Operation extends React.Component {
//   render() {
//     fun = () => {
//       <p>{a + b}</p>
//     }
//     return (
//       <p></p>
//     );
//   }
// };

function Operation(addition,) {
  return addition.fValue + addition.sValue;
}

const addition = {
  fValue: '10',
  sValue: '20'
}

function getGreeting(user) {
  if (addition) {
    return <h1>Hello,{Operation(addition)}</h1>
  }
}
ReactDOM.render(<h1>{getGreeting(addition)}</h1>, document.getElementById("root"));




