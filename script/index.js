"use strict"
document.addEventListener('DOMContentLoaded', () => {
    const characterList = document.getElementById('character-list');
    const characterDetails = document.getElementById('character-details');

    // Function to fetch characters from Star Wars API
    const fetchCharacters = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people/');
            const data = await response.json();
            displayCharacterList(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Function to display list of characters
    const displayCharacterList = (characters) => {
        characters.forEach(character => {
            const characterElement = document.createElement('div');
            characterElement.classList.add('container');
            characterElement.innerHTML = `<p>${character.name.toUpperCase()}</p>`;
            characterElement.addEventListener('click', () => {
                clearSelection();
                characterElement.classList.add('selected');
                displayCharacterDetails(character);
            });
            characterList.appendChild(characterElement);
        });
    };

    // Function to display details of a clicked character
    const displayCharacterDetails = (character) => {
        characterDetails.innerHTML = `
            <p><strong>Name:</strong> ${character.name}</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
            <p><strong>Height:</strong> ${character.height} cm</p>
        `;
        characterDetails.style.display = 'block';
    };

    // Function to clear previously selected character
    const clearSelection = () => {
        const characters = document.querySelectorAll('.container');
        characters.forEach(character => character.classList.remove('selected'));
    };

    // Fetch characters when the page loads
    fetchCharacters();
});


