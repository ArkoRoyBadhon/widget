
// widget.js
(function() {
    // Create the button
    var button = document.createElement('button');
    button.id = 'data-fetch-button';
    button.innerText = 'Show Posts';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';

    // Create the card container
    var card = document.createElement('div');
    card.id = 'data-card';
    card.style.position = 'fixed';
    card.style.bottom = '70px';
    card.style.right = '20px';
    card.style.width = '300px';
    card.style.height = '400px';
    card.style.backgroundColor = '#fff';
    card.style.border = '1px solid #ccc';
    card.style.borderRadius = '5px';
    card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    card.style.overflowY = 'scroll';
    card.style.display = 'none';
    card.style.zIndex = '1000';

    // Function to fetch data from API
    function fetchData() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                card.innerHTML = ''; // Clear any previous content
                data.forEach(post => {
                    var postContainer = document.createElement('div');
                    postContainer.style.padding = '10px';
                    postContainer.style.borderBottom = '1px solid #eee';

                    var title = document.createElement('h3');
                    title.innerText = post.title;
                    title.style.margin = '0 0 5px';
                    title.style.fontSize = '16px';

                    var body = document.createElement('p');
                    body.innerText = post.body;
                    body.style.margin = '0';
                    body.style.fontSize = '14px';

                    postContainer.appendChild(title);
                    postContainer.appendChild(body);
                    card.appendChild(postContainer);
                });
            });
    }

    // Toggle card visibility when the button is clicked
    button.addEventListener('click', function() {
        if (card.style.display === 'none') {
            card.style.display = 'block';
            fetchData(); // Fetch and display data when the card is opened
        } else {
            card.style.display = 'none';
        }
    });

    // Append the button and card to the body
    document.body.appendChild(button);
    document.body.appendChild(card);
})();

