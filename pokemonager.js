(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
     fetch(`https://pokeapi.co/api/v2/pokemon?${n}`)
      .then((Response) => {
        return Response.json();

      })
      .then((json) =>{
        console.log(json)
      })
        

    
      

    }

    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
    }
  }

  window.Pokemonager = Pokemonager;
})();
