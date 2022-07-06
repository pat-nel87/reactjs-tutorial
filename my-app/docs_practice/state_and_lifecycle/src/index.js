import React from 'react'
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {
    render() {
        return (
        <div>
            <h1> Clock Demo </h1>
            <h2> Time is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
  }
}
