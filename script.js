function fetchProfile(){
    const username = document.getElementById("username").value;
    if (!username) {
        alert('Enter a username');
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response is not ok');
        }
        return response.json();
    })
    .then(data => {
        displayProfile(data);
    })
    .catch(err => {
        console.log('There was a problem with the fetch operation:', err);
    });
}

function displayProfile(profileData) {
    const profileElement = document.getElementById("profile");
    profileElement.innerHTML = `
        <img src="${profileData.avatar_url}" alt="Avatar" width="100" height="100">
        <h2>${profileData.login}</h2>
        <p>Followers: ${profileData.followers}</p>
        <p>Following: ${profileData.following}</p>
        <p>Public Repositories: ${profileData.public_repos}</p>
        <a href="${profileData.html_url}" target="_blank">Visit Profile</a>
    `;
}

function clearProfile() {
    // Clear the profile display and input field
    document.getElementById("profile").innerHTML = '';
    document.getElementById("username").value = '';
}
