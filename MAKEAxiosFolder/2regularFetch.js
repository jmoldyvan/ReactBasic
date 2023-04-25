// write a function that completes a fetch request for this api `https://pokeapi.co/api/v2/pokemon' and returns the response data













































































































async function getPokemonInfo() {        
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon}/`)
        const jsonData = await res.json()
        return jsonData.data;      
    } catch (error) {
        console.error(error);
    }
};

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])