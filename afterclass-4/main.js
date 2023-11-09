async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
  
    // Iteramos sobre los personajes
    for (const character of data.results) {
      // Mostramos la información en el DOM
      document.getElementById("characters").innerHTML += `
        <div>
          <h2>${character.name}</h2>
          <p>Estado: ${character.status}</p>
          <p>Especie: ${character.species}</p>
          <p>Tipo: ${character.type}</p>
          <p>Género: ${character.gender}</p>
          <a href="https://en.wikipedia.org/wiki/${character.name}">Enlace a Wikipedia</a>
        </div>
      `;
    }
  }
  

  getCharacters()


  