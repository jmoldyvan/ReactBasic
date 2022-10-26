import React from "react"
import boxes from "./boxes"
import Box from "./Box"

// boxes is an array of objects like:
//          {
    //          id: 1,
    //          on: true
    //      },   

export default function App() {

    // boxes is our data source
    // create a compnent for each object in 
    // our data array, pass into each unique component
    // the properties of each object, show it all in main

    return (
        <main>
            
        </main>
    )
}































































































































import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
