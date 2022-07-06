import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';

function HeyThere(props) {
    return <h1> Hey There, {props.name}</h1>;
}

function parentApp() {
    return(
        <div>
            <HeyThere name="Pat" />
            <HeyThere name="Mike" />
            <HeyThere name="Steve" />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const element = parentApp();
root.render(element);