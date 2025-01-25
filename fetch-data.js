// Async function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data'); // Select container

    try {
        const response = await fetch(apiUrl); // Fetch data from API
        const users = await response.json(); // Parse response as JSON

        dataContainer.innerHTML = ''; // Clear loading message

        const userList = document.createElement('ul'); // Create list container

        // Loop through users and append each name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set user's name
            userList.appendChild(listItem); // Add list item to the list
        });

        dataContainer.appendChild(userList); // Append list to container
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.'; 
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
