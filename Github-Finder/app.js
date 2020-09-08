// Init the Github class
const github = new Github();

// Init the UI Class
const ui = new UI();
// Search input event listener
const serachUser = document.getElementById("searchUser");

serachUser.addEventListener("keyup", (e) => {
  // Get the input value
  const userText = e.target.value;
  // Make http call
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show an alert
        ui.showAlert("Profile not found", "alert alert-danger");
        ui.clearProfile();
      } else {
        // Show profile information
        ui.showProfile(data.profile);
        // Show user's repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
