import React from "react"
import boxes from "./boxes"
import Box from "./BoxAndStyle"


export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
    
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}





































































































export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
    
    function toggle() {
        console.log("Clicked!")
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            onClick
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
