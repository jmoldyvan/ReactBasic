import React from 'react';
import ReactDOM from 'react-dom';

// in the function include the ability to add another element to the thingsarray
// state, where the next item is Thing (incrememnt of 1)

// add a button that uses the addItem function when it is clicked

// include a feature below the button that displays the thingsArray
// elements as <p> tags and will add to the list everytime the button is hit


function App() {

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        
        
        
    }
    
    
    return (
        <div>

        </div>
    )
}


























































// HINT use map to map over the elements, but then how do you display them?
// and how in order>?




















import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // We'll work on this next
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}