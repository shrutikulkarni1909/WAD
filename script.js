document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a user object
    const user = {
        username: username,
        email: email,
        password: password
    };

    // Push user data to local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to user list page
    window.location.href = "userList.html";  // Ensure the path is correct based on your directory structure
});
