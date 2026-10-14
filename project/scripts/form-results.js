// Shows the data submitted from suggestions.html (sent in the URL by method="get")
const params = new URLSearchParams(location.search);

const fields = [
    ['movie-title', 'Movie Title'],
    ['movie-genre', 'Movie Genre'],
    ['comment', 'Comment'],
    ['user-name', 'Your Name']
];

const message = document.querySelector('#results-message');
const list = document.querySelector('#results-list');

const submitted = fields.filter(([key]) => params.has(key));

if (submitted.length === 0) {
    message.textContent = 'No suggestion was received. Please use the suggestion form.';
} else {
    message.textContent = `Thanks, ${params.get('user-name')}! Here is what you sent:`;

    submitted.forEach(([key, label]) => {
        const term = document.createElement('dt');
        const detail = document.createElement('dd');
        term.textContent = label;
        detail.textContent = params.get(key); // textContent keeps user input from being run as HTML

        list.append(term, detail);
    });
}