import React from "react"
import boxes from "./boxes"
import Box from "./Box"
// {
//     id: 1,
//     on: true
// },   
// {
//     id: 2,
//     on: false
// }, 

// 1. create components that represents each of the "boxes" from the boxes
// dataset, where 'boxes' is an array of objects. display them in the <main>
// section. Include a key as well as a toggle function with the boxes object
// properties
// 2. in Box, create a click event that will run the function "toggle" and
// pass the id as the parameter
// 3. create the toggle function that uses the components parameter, id.
// you will iterate through the squares array by creating a new array, you will
//  check if any of the new array individuals id match the parameter id
// if they do, change that individuals "on" property to the opposite while
// spreading the old object, if the they individuals do not match, return the 
// old square
// use setSquares to update the
// correct square in the array.


export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle() {

    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
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
    
    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
