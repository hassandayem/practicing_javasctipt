// Book Constructor
function Book(title, author, isbn) {
  (this.title = title), (this.author = author), (this.isbn = isbn);
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function (book) {
  // Select the tbody element
  const list = document.getElementById("book-table");
  // Create a tr element
  const row = document.createElement("tr");

  // Append the items to table row
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td> <a href="#" class="delete-item">X</a> </td>
    `;
  // Append the row the tbody
  list.appendChild(row);
};

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event Listeners
document.getElementById("book-list").addEventListener("submit", function (e) {
  // input values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  // Instantiate a book
  const book = new Book(title, author, isbn);

  // Instantiate the UI
  const ui = new UI();

  ui.addBookToList(book);
  ui.clearFields();

  e.preventDefault();
});
