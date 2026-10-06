import { places } from "../data/places.mjs";

const container = document.querySelector("#discover-cards");

places.forEach((place, index) => {
    const card = document.createElement("article");
    card.classList.add("card", `card${index + 1}`);

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="images/${place.image}" alt="${place.name} in Milpitas"
                width="300" height="200" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <p>Cost: ${place.cost}</p>
        <p>Phone: ${place.phone}</p>
        <a href="${place.website}" target="_blank" rel="noopener">Learn more</a>
    `;
    
    container.appendChild(card);
});