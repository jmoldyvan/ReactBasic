// create a useEffect that runs on every render




// create a useEffect that runs once per render





// create a useEffect that ios contingent on a state







































































































// create a useEffect that runs on every render

useEffect(() => {
    updateHighScores()
});


// create a useEffect that runs once per render


useEffect(() => {
    if(!currentUser){
        navigate("/login");
        }
    generateRandomPokemon(genertaions)
    allNamesOfPokemon()
}, []);


// create a useEffect that ios contingent on a state


useEffect(() => {
    updateAllScores()
    updateHighScores()
}, [comboTracker]);
