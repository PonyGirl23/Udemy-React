// import React from 'react';
// import ReactDOM from 'react-dom';

// // This is a Functional Component:
// // const App = () => {
// //     window.navigator.geolocation.getCurrentPosition(
// //         (position) => console.log(position), //argument #1, called the success callback because this is what's used when everything goes according to plan
// //         (err) => console.log(err) //argument #2, called the failure callback because this is what is used when the getCurrentPosition() isn't able to determine the users position
// //     );
// //     return <div>Hi there!</div>;
// // };

// //This is a Class Based Component:
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         //Initializing state: (this is the only time we do direct assignment to this.state!!!!!!)
//         this.state = { lat: null, errorMessage: '' };

//         window.navigator.geolocation.getCurrentPosition(
//             //(position) => console.log(position)   You can do this to see the object in the console 
//                 //position: is argument #1 (or the first callback), called the success callback because this is what's 
//                 //used when everything goes according to plan.

//             (position) => { 
//                 this.setState({ lat: position.coords.latitude });
//                 //Here we call setState!!!!
//             },

//             //(err) => console.log(err) You can do this to see the object in the console 
//             // err: is argument #2 (or the second callback), called the failure callback
//             //because this is what is used when the getCurrentPosition() isn't able to determine the users position

//             (err) => {
//                 this.setState({ errorMessage: err.message })
//             }
//         );
//     }

//     // componentDidMount() {
//     //    console.log('My component was rendered to the screen.');
//     // }

//     // componentDidUpdate() {
//     //     console.log('My component was just updated it re-rendered.');
//     // }

//     // React requires that we have to define render or it will throw an error!!
//     render() {
//         //Referencing state inside of JSX:
//         if (this.state.errorMessage && !this.state.lat) {
//             return <div> Error: {this.state.errorMessage} </div>;
//         }
//         if (!this.state.errorMessage && this.state.lat) {
//             return <div> Latitude: { this.state.lat } </div>;
//         }
//         return <div> Loading! </div>;
//     };
// };

// ReactDOM.render(
//     <App />, //first argument
//     document.querySelector('#root') //second argument
// );

