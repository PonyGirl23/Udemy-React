import React from 'react';
import ReactDOM from 'react-dom';

// This is a Functional Component:
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position), //argument #1, called the success callback because this is what's used when everything goes according to plan
//         (err) => console.log(err) //argument #2, called the failure callback because this is what is used when the getCurrentPosition() isn't able to determine the users position
//     );
//     return <div>Hi there!</div>;
// };

//This is a Class Based Component:
class App extends React.Component {
    constructor(props) {
        super(props);
        //Initializing state:
        this.state = { lat: null };
    }
    // React requires that we have to define render or it will throw an error!!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), //argument #1, called the success callback because this is what's used when everything goes according to plan
            (err) => console.log(err) //argument #2, called the failure callback because this is what is used when the getCurrentPosition() isn't able to determine the users position
        );
        //Referencing state inside of JSX:
        return <div>Latitude: { this.state.lat } </div>;
    };
};

ReactDOM.render(
    <App />, //first argument
    document.querySelector('#root') //second argument
);

