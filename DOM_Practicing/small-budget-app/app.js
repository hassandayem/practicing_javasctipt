// Declare UI variables
const UIbudgetForm = document.querySelector(".budget__form");
const UIexpenseForm = document.querySelector(".expense__form");
const UIepxenseAmount = document.querySelector(".expense__form--amount");
const UIepxenseCategory = document.querySelector(".expense__form--category");
const UIepxenseInput = document.querySelector(".budget__input");
const UIexpenseSubmitBtn = document.querySelector(".expense__submit");
const UIbudgetRemaining = document.querySelector(".budget__remaining");
// The Table
const table = document.querySelector(".table");

let budgetRemainingValue = parseInt(UIbudgetRemaining.textContent);

// Add the daily budget - functionality
const addBudget = (e) => {
  let budgetValue = parseInt(e.target.querySelector("input").value);
  // Change the budget value to equal expense value
  budgetRemainingValue += budgetValue;
  // Reflect the change on the UI
  UIbudgetRemaining.innerHTML = `<h3 class="display-3">${budgetRemainingValue}$</h3>`;
  // Reset the field after submit
  UIepxenseInput.value = "";
  // Blur the field after submit
  UIepxenseInput.blur();

  e.preventDefault();
};

// Subtract budget from amount
function subtractBudget(e) {
  // Grab the value of expense input
  let expenseValue = parseInt(UIepxenseAmount.value);
  // Subtract from budget value
  budgetRemainingValue -= expenseValue;
  // Reflect changes on UI
  UIbudgetRemaining.innerHTML = `<h3 class="display-3">${budgetRemainingValue}$</h3>`;
  // Reset the amount field after submition
  UIepxenseAmount.value = "";

  addToTable();

  e.preventDefault();
}

// Listen to budget submit event - Add the daily budget
UIbudgetForm.addEventListener("submit", addBudget);

// Listen to the add amount click event - Submit the expense with amount and category
UIexpenseSubmitBtn.addEventListener("click", subtractBudget);

// Add details to the table
function addToTable() {
  console.log(UIepxenseCategory.value);

  // Dealing with table
  const tHeads = table.tHead.getElementsByTagName("th");

  // Create new row
  let newRow = table.insertRow(-1);
  // Create new cell
  let newCell = newRow.insertCell(0);
  // Append a text to cell
  let newText = document.createTextNode(UIepxenseCategory.value);
  newCell.appendChild(newText);
  let cost = document.createTextNode(UIepxenseAmount.value);
  newCell.appendChild(cost);

  // Reset the category field after submition
  UIepxenseCategory.value = "";
}
