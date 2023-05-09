import React from "react"
import boxes from "./boxes"
import Box from "./BoxAndStyle"

// boxes is an array of objects like:
//          {
    //          id: 1,
    //          on: true
    //      },   

export default function App() {

    // boxes is our data source
    // map the data to a new compnonet called box 
    // in each component, pass in the properties of each object as key, id, and on
    // show the array in main

    



    return (
        <main>
            
        </main>
    )
}































































































































import React from "react"
import boxes from "./boxes"
import Box from "./BoxAndStyle"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
