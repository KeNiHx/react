//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component

// function getButtonText() {
//     return 'Click on me!';
// }



//Create a react component

//Method 1:
const App = function() {
    // const buttonText = 'Click Me!';

    // another way to reference text
        const buttonText = { text: 'Click me'}

    return ( 
    <div>
        {/* Don't use class in JSX use className, use htmlFor */}
        <label className="label" htmlFor="name">
            Enter name:
        </label>
        <input id="name" type="text" />
        {/* <button style="background-color: blue; color: white;">Submit</button> */}
   
        {/* Adding custom styling to an ekement uses different syntax  */}
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {/* {buttonText} */}
            {buttonText.text}
            {/* referencing JS function */}
            {/* {getButtonText()} */}
        </button>
    </div>
    );
}

//Method 2: 
// cosnt App2 = () => {
//     return <div> Hi There! </div>;
// };

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);