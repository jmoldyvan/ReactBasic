import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

 
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>Yes</h1>
            </div>
        </div>
    )
}
























































































// import React from "react"

// export default function App() {
//     /**
//      * Challenge: 
//      * - Initialize state for `isGoingOut` as a boolean
//      * - Make it so clicking the div.state--value flips that
//      *   boolean value (true -> false, false -> true)
//      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//      */
    
//     let [isGoingOut, setisGoingOut] = React.useState(true)
//     let [yesNo, setYesNo] = React.useState('Yes')
//     function flippy(){
//         if (isGoingOut===true){
//             setisGoingOut(false),
//             setYesNo('No')
//         }
//         else{
//             setisGoingOut(true)
//             setYesNo('Yes')
//         }
//     }
    
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div onClick={flippy} className="state--value">
//                 <h1>{yesNo}</h1>
//             </div>
//         </div>
//     )
// }



// import React from "react"

// export default function App() {
//     /**
//      * Challenge: 
//      * - Initialize state for `isGoingOut` as a boolean
//      * - Make it so clicking the div.state--value flips that
//      *   boolean value (true -> false, false -> true)
//      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//      */
    
//     let [isGoingOut, setisGoingOut] = React.useState(true)
    
//     function flippy(){
//         if (isGoingOut===true){
//             setisGoingOut(false)
//         }
//         else{
//             setisGoingOut(true)
//         }
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div onClick={flippy} className="state--value">
//                 {isGoingOut ? <h1>Yes</h1> : <h1>No</h1>}
//             </div>
//         </div>
//     )
// }

// import React from "react"

// export default function App() {
//     const [isGoingOut, setIsGoingOut] = React.useState(true)
//     /**
//      * Challenge: 
//      * - Initialize state for `isGoingOut` as a boolean
//      * - Make it so clicking the div.state--value flips that
//      *   boolean value (true -> false, false -> true)
//      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//      */
//     function changeMind() {
//         setIsGoingOut(prevState => !prevState)
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div onClick={changeMind} className="state--value">
//                 <h1>{isGoingOut ? "Yes" : "No"}</h1>
//             </div>
//         </div>
//     )
// }
