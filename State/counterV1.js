// set up a react environment

// Set up state to track our count (initial value is 0)
// have a button incrumiment up by 1 for each click

// after, create the same tracking count function, but instead
// use an arrow function and callback to increase the count by one

// hint** the callback function implicitly uses the paramete of the old set
// state, we can abbreviate that as prevState if needed






































































import React, {useState} from "react"

export default function App(){

    const [counter, setCounter] = useState(0)

    function addition(){
        setCounter(counter + 1) 
    }

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={addition}></button>
        </div>
    )
}




function add() {
    setCount(prevCount => prevCount + 1)
}

   /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */