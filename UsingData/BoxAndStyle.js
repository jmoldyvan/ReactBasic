import React from "react"

export default function Box(props) {
    // create a style object that changes pointerEvents to
    // none if the props value on is false
    // set that style in the div
    
    return (
        <div 
            className="box"
        >
        </div>
    )
}







































































































import React from "react"

export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
        >
        </div>
    )
}