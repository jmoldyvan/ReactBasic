import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    // set up a unction that when button is clicked
    // will change only the isFavorite part of the object
    // to the opposite truthy value


    

    return(
        <div>
            <button></button>
        </div>
    )

    

























































































import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact( prev =>{
        return {
            ...prev,
            isFavorite: !prevContact.isFavorite
        }})
    }