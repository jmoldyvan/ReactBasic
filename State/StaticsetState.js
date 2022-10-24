// create a react environment

// instantiate a state as "yes"

// create a handle click functiojn that changes state to "No"

// have state change on click of a button



































































import React, {useState} from "react"

export default function App(){

    const [newState, setNewState] = useState("yes")

    function handleClick(){
        setNewState("no")
    }

return(
    <div>
        <h1>{newState}</h1>
        <button onClicki={handleClick}> change sate to no</button>
    </div>
)
}