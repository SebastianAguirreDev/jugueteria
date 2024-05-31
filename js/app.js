document.addEventListener("DOMContentLoaded", function() {
    const charactersContainer = document.getElementById('characters-container');

    // IDs of the characters you want to fetch
    //const characterIds = [1, 2, 3, 4]; // Rick Sanchez, Morty Smith, Summer Smith, Beth Smith
    const characterIds = [1,2];

    // Fetch character data from the API
    fetch(`https://rickandmortyapi.com/api/character/${characterIds.join(',')}`)
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                // Create a div element for each character
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');

                // Set the inner HTML of the div
                characterDiv.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <h3>${character.name}</h3>
                    <p>Status: ${character.status}</p>
                    <p>Species: ${character.species}</p>
                    <p>Gender: ${character.gender}</p>
                    <p>Origin: ${character.origin.name}</p>
                `;

                // Append the div to the container
                charactersContainer.appendChild(characterDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching character data:', error);
        });
});
