const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "Full-time Job",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "Internship",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingfor: "Part-time Job",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
];

const profiles = nextProfile(data);

// Show the first profile
showProfile();

document.getElementById("next").addEventListener("click", showProfile);

function showProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
         <ul class = "list-group">
            <li class="list-group-item">
                Name: ${currentProfile.name}
            </li>

            <li class="list-group-item">
                Age: ${currentProfile.age}
            </li>

            <li class="list-group-item">
                Location: ${currentProfile.location}
            </li>

            <li class="list-group-item">
                Looking For: ${currentProfile.lookingfor}
            </li>
         </ul>        
        `;

    document.getElementById("imageDisplay").innerHTML = ` 
        <img src="${currentProfile.image}" /> `;
  } else {
    window.location.reload();
  }
}

function nextProfile(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
