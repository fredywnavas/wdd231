const params = new URLSearchParams(window.location.search);

const membershipLabels = {
    np: 'NP Membership',
    bronze: 'Bronze Membership',
    silver: 'Silver Membership',
    gold: 'Gold Membership'
};

document.getElementById('fullName').textContent = 
    `${params.get('firstName') || ''} ${params.get('lastName') || ''}`.trim();

document.getElementById('orgTitle').textContent = params.get('orgTitle') || 'N/A';
document.getElementById('email').textContent = params.get('email') || '';
document.getElementById('phone').textContent = params.get('phone') || '';
document.getElementById('orgName').textContent = params.get('orgName') || '';
document.getElementById('orgDescription').textContent = params.get('orgDescription') || 'N/A';

const membershipValue = params.get('membership');
document.getElementById('membership').textContent = membershipLabels[membershipValue] || membershipValue || '';

const rawTimestamp = params.get('timestamp');
document.getElementById('timestamp').textContent = rawTimestamp
    ? new Date(rawTimestamp).toLocaleString()
    : '';