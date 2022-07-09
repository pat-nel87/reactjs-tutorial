import React from 'react'
import ReactDOM from 'react-dom/client';

/* You can build collections of elements and include them in JSX
using curly braces {}. Using a map function we return a <li>
for each item, We can assign the resulting array of elements to
listItems 

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
    <li>{number}</li>
);

<ul>{number}</ul>

*/

// We can refactor the example above as a component 

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);