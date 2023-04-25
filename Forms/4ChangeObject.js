// write a function that handles a change for the first or last name of the form data object
// make sure the form data is updating on any change that is different from the previous change
// after add an email field to the form data and a new input for it

import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
    )
    
    console.log(formData)
    
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
            />
        </form>
    )
}
























































































































import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: ""}
    )
    
    /**
     * Challenge: add an email field/state to the form
     */
    
    console.log(formData)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}

            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}

            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}

            />
        </form>
    )
}

