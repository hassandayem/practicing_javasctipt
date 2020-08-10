// Declare UI variables
const UIexpenseForm = document.querySelector(".expense__form");
const UIepxenseInput = document.querySelector(".expense__input");
const UIbudgetRemaining = document.querySelector(".budget__remaining");
const UIepxenseAmount = document.querySelector(".expense__form--amount");
const UIepxenseCategory = document.querySelector(".expense__form--category");

console.log(parseInt(UIbudgetRemaining.textContent));
let budgetValue = parseInt(UIbudgetRemaining.textContent);

// Add the daily budget - functionality
const addExpense = (e) => {
  let expenseValue = parseInt(e.target.querySelector("input").value);
  budgetValue += expenseValue;
  UIbudgetRemaining.innerHTML = `<h3 class="display-3">${budgetValue}$</h3>`;
  UIepxenseInput.value = "";
  UIepxenseInput.blur();

  e.preventDefault();
};

// Add the daily budget - listen to submit event
UIexpenseForm.addEventListener("submit", addExpense);
