// set up a react environment and declare a state "yes"
// place the state within a h1







 


































































import React , {useState} from "react"

export default function App(){
    const [newState, setNewState] = useState("yes")
    return(
        <div>
            <h1>{newState}</h1>
        </div>
    )
}