
async function getPokemons() {
    let response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
    if(response.ok === true){
      let pokemons = await response.json();
      return pokemons;
    
    }
  }
 

  async function showPokemons(pokemons){
    const pokemonsContainer = document.getElementById('pokemonsShow');
    pokemons.forEach((pokemon ) => {
      // Créer l'element article , h2 et l'element img//
      let button = document.createElement('button');
      let articleElement = document.createElement('article')
      let titleElement = document.createElement('h2');
      let imgElement = document.createElement('img');
      // Va chercher la source et la key pour les images dans le tableau//
      imgElement.setAttribute('src',pokemon.image);
      // Va chercher le texte avec la key dans le tableau//
      let titleTxt = document.createTextNode(pokemon.name); 
      let buttonText = document.createTextNode("En savoir plus")   
      // APPENDCHILD = créér des enfants a chaque fois que nécessaire a la div//
      button.appendChild(buttonText);
      titleElement.appendChild(titleTxt);
      pokemonsContainer.appendChild(articleElement);
      articleElement.appendChild(titleElement);
      articleElement.appendChild(button);
      articleElement.appendChild(imgElement);
      articleElement.appendChild(button);
      articleElement.classList.add("article");
      imgElement.classList.add("imgArticles");
      button.setAttribute('src',pokemon.id);
      button.addEventListener('click',() => {
        let pokemonId = pokemon.id;
        let pokemonName = pokemon.name;
        sessionStorage.setItem("pN",pokemonName);      
        sessionStorage.setItem("pID",pokemonId);
        window.location.href = "pokemon.html";
      })
      
    })
  }
  
getPokemons().then(pokemons => showPokemons(pokemons))