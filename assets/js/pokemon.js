let pokemonId = sessionStorage.getItem("pID");
let pokemonName = sessionStorage.getItem('pN');
document.querySelector("#wesh").innerHTML = "Bienvenue " + pokemonName;


async function getPokemonByID() {
    let response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/'+ pokemonId);
    if(response.ok === true){
      let pokemon = await response.json();
      return pokemon;

    }
  }

 function pokemonsById(pokemon){
    const pokemonDiv = document.getElementById('pokemonId');
      let articleElement = document.createElement('article')
      let titleElement = document.createElement('h2');
      let imgElement = document.createElement('img');
      let titleTxt = document.createTextNode(pokemon.name);
      imgElement.setAttribute('src',pokemon.image);
      pokemonDiv.appendChild(articleElement);
      articleElement.appendChild(titleElement);
      articleElement.appendChild(imgElement);
      titleElement.appendChild(titleTxt);
      
      
    pokemon.apiResistances.forEach(resistance => {    
        let trElement = document.createElement("tr");
        let tdElement =document.createElement("td");
        trElement.appendChild(tdElement);
        let resistanceText = document.createTextNode(resistance.name + " " + resistance.damage_multiplier + " " + resistance.damage_relation);
        tdElement.appendChild(resistanceText);
        document.getElementById('resDiv').appendChild(trElement);
   

        
    });
    
    pokemon.apiTypes.forEach(type => {
        const articleType = document.getElementById('type');
        let typeElement = document.createElement('h2');
        let imgType = document.createElement('img');
        let typeTxt = document.createTextNode(type.name);
        imgType.setAttribute('src',type.image)
        typeElement.appendChild(typeTxt);
        articleType.appendChild(typeElement);
        articleType.appendChild(imgType);
        



    });
}
    
  
    
  


  getPokemonByID().then(pokemon => pokemonsById(pokemon));

