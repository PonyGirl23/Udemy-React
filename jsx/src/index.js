// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create a react component:

// const App = function() {
//     return <div>Hi there!</div>
// }

// Same function as line 7 but written in ES2015 with a fat arrow function:
//  const App = () => {
//    return <div>Hi there!</div> 
//  }

// function getButtonText() {
//     return 'Click on me!';
// }

const App = () => {
    const buttonText = 'Click Me!';
    return (
        <div>
            <label className="label" htmlFor="name"> Enter Name: </label>
            <input id="name" type="text" />
            {/*  HTML: <button style={{backgroundColor: 'blue', color: 'white'}}> Submit</button> */}
            {/* JSX: */} <button style={{backgroundColor: 'blue', color: 'white'}}> {buttonText} </button> 
            
            {/* JSX: <button style={{backgroundColor: 'blue', color: 'white'}}> {getButtonText()} </button> */}
            {/* because the line above is referencing the function on line 15 you must use () to call that function*/}
        </div>
        //Note: use double quotes for all JSX properties and single quotes everywhere else.
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)