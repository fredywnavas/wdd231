// FETCH AND DISPLAY MEMBERS FROM JSON FILE WITH GRID AND LIST VIEW TOGGLE

let members = []; //store members data globally

// get DOM elements
const membersContainer = document.getElementById('members-container');
const gridViewBtn = document.getElementById('grid-view-btn');
const listViewBtn = document.getElementById('list-view-btn');

// fetch members data from JSON file
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');

        //Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        members = data.companies; // store members data globally

        // Load grid view by default
        displayGridView();

    } catch (error) {
        console.error('Error fetching members data:', error);
        membersContainer.innerHTML = '<p>Failed to load members data. Please try again later.</p>';
    }
}

// display members in grid view
function displayGridView() {
    membersContainer.innerHTML = ''; // clear container
    membersContainer.classList.remove('list-view');
    membersContainer.classList.add('grid-view');

    members.forEach(member => {
        const card = createMemberCard(member);
        membersContainer.appendChild(card);
    });

    // Update button states
    gridViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
}

// display members in list view
function displayListView() {
    membersContainer.innerHTML = ''; // clear container
    membersContainer.classList.remove('grid-view');
    membersContainer.classList.add('list-view');

    members.forEach(member => {
        const listItem = createMemberListItem(member);
        membersContainer.appendChild(listItem);
    });

    // Update button states
    listViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
}

// create a member card for grid view
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';

    const membershipBadge = getMembershipBadge(member.membershipLevel);

    card.innerHTML = `
        <div class="card-image">
            <img src="${member.image}" alt="${member.name} Logo" loading="lazy">
        </div>
        <div class="card-content">
            <h3>${member.name}</h3>
            <p class="industry"><em>${member.industry}</em></p>
            <p class="address">${member.address}</p>
            <p class="phone"><a href="tel:${member.phone}">${member.phone}</a></p>
            <a href="${member.website}" target="_blank" class="website-link">Visit Website</a>
            <span class="membership-badge ${membershipBadge.class}">${membershipBadge.text}</span>
        </div>
    `;

    return card;
}

// create a member list item for list view
function createListItem(member) {
    const item = document.createElement('div');
    item.className = 'member-list-item';

    const membershipBadge = getMembershipBadge(member.membershipLevel);

    item.innerHTML = `
        <div class="list-item-header">
            <h3>${member.name}</h3>
            <span class="membership-badge ${membershipBadge.class}">${membershipBadge.text}</span>
        </div>
        <p class="industry"><strong>Industry:</strong> ${member.industry}</p>
        <p class="address"><strong>Address:</strong> ${member.address}</p>
        <p class="phone"><strong>Phone:</strong> <a href="tel:${member.phone}">${member.phone}</a></p>
        <p class="website"><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
    `;

    return item;
}

// Get membership level badge styling
function getMembershipBadge(level) {
    const badges = {
        1: { text: 'Silver Member', class: 'silver' },
        2: { text: 'Gold Member', class: 'gold' },
        3: { text: 'Platinum Member', class: 'platinum' }
    };
    return badges[level] || { text: 'Member', class: 'standard' };
}

// Event listeners for view toggle buttons
gridViewBtn.addEventListener('click', displayGridView);
listViewBtn.addEventListener('click', displayListView);

// Load members data on page load
document.addEventListener('DOMContentLoaded', loadMembers);