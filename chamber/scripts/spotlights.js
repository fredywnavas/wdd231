// spotlights.js displays 2-3 random gold/silver member spotlight cards
// on each page load, sourced from data/members.json


async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();
        displaySpotlights(data.companies);
    } catch (error) {
        console.error("Couldn not load member data:", error);
    }
}

function displaySpotlights(companies) {
    // only silver (2) and gold (3) members qualify for a spotlight
    const eligible = companies.filter((company) => company.membershipLevel >= 2);

    const shuffled = shuffleArray(eligible);

    // show 3 if there are enough eligible members that day, otherwise 2
    const spotlightCount = shuffled.length >= 3 ? 3 : 2;
    const selected = shuffled.slice(0, spotlightCount);

    const container = document.querySelector(".spotlight-cards");
    container.innerHTML = selected.map(createSpotlightCard).join("");
}

function createSpotlightCard(company) {
    const levelNames = { 1: "Member", 2: "Silver Member", 3: "Gold Member" };
    const levelLabel = levelNames [company.membershipLevel] || "Member";

    return `
        <div class="spotlight-card">
            <img src="${company.image}" alt="${company.name} logo" loading="lazy">
            <h3>${company.name}</h3>
            <p class="level">${levelLabel}</p>
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <p><a href="${company.website}" target="_blank" rel="noopener">${company.website}</a></p>
        </div>
    `;
}

// Fisher-Yates shuffle - gives a genuinely random order each time,
// unline Array.sort(() => Math.random() - 0.5) which is biased.
function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

document.addEventListener("DOMContentLoaded", getMembers);