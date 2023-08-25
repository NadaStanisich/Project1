
//When the page content is loaded
document.addEventListener("DOMContentLoaded", function () 
{
    // Get references to the input elements and login button
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("loginButton");
  
    // Add a click event listener to the login button
    loginButton.addEventListener("click", function () 
    {
      // Get the entered username
      const username = usernameInput.value;
      // Get the entered password
      const password = passwordInput.value;
  
      // If credentials are valid
      if (isValidCredentials(username, password)) 
        {
        // Redirect to the dashboard
        // Log an authentication success message (Happy Bob)
        console.log("Authentication successful!");
        } 
        else 
        {
        // Log an invalid credentials message (Angry Yuki)    
        console.log("Invalid credentials");
        }
    });
  
    // Function to check if credentials are valid
    function isValidCredentials(username, password) 
    {
      // Perform database checks here 
      // Check at this point if admin or user
      // For now, let's assume credentials are valid if both fields are non-empty
      return username !== "" && password !== "";
    }
});
