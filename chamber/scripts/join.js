document.getElementById('timestamp').value = new Date().toISOString();

document.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.dataset.modal;
        document.getElementById(modalId).showModal();
    });
});

document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
    });
});