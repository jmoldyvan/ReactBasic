// create a use effct that runs an async function called doIt that renders only once per page
// create a function called getit that runs an axios get request for`https://pokeapi.co/api/v2/pokemon/`
// in doit, run getit, and set a state of gotit 
// map gotit to divs and display the result in the retuirn statement

import React from "react"
import axios from 'axios'

export default function Form() {

    

    
    return (

    )
}






































































































const [gotIt, setGotIt] = useState([])

useEffect(() => {
    doIt()
}, []);

async function getIt() {        
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getSelectedRanges(genertaions)}/`);
        return res.data;      
    } catch (error) {
        console.error(error);
    }
};

async function doIt(){
    try{
        let it = await getIt()
        setGotIt(it)        
    } catch (error) {
        console.error(error);
    }
}

let mappedIt = gotIt.map((x) => <div>{x}</div>)