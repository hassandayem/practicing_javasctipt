// Listen to the calculate button
const loanForm = document.querySelector("#loan-form");
loanForm.addEventListener("submit", function (e) {
  // Hide the results container
  document.getElementById("results").style.display = "none";
  // Show the loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculate, 1500);
  e.preventDefault();
});

function calculate() {
  // Grab the UI input vars
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const yearsToPay = document.querySelector("#years");

  // Grab the UI results vars
  const monthlyPaymeny = document.querySelector("#monthly-payment");
  const totalPaymeny = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(yearsToPay.value) * 12;

  // Calculate the loan
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPaymeny.value = monthly.toFixed(2);
    totalPaymeny.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    // Show the results container
    document.getElementById("results").style.display = "block";

    //Show the loader
    document.getElementById("loading").style.display = "none";
  } else {
    wrong("Please enter some values");
  }
}

// Error message
function wrong(error) {
  // Create the error container
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  // Grab the card and heading elements
  const cardContainer = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Show the error
  cardContainer.insertBefore(errorDiv, heading);

  // Hide the loader
  document.getElementById("loading").style.display = "none";

  // Clear the error after 3sec.
  setTimeout(clearError, 2500);
}

// Clear Error function
function clearError() {
  document.querySelector(".alert").remove();
}
