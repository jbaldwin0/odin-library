const myLibrary = [];
var shelf = document.getElementById("shelf");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function iterateThroughBooks(library) {
    for (let i = 0; i < library.length; i++) {
        console.log(library[i]);
        const book = `
        <div class="books">
            <p>${library[i].title}</p>
        </div>
        `;
        shelf.insertAdjacentHTML("beforeend", book);
        // Perform iteration action
    }
}

// document.body.innerHTML = markup;
// library[i].title;
const hobbit = new Book("The Hobbit", "Tolkien", "255", "Yes");
const pride = new Book("Pride and Prejudice", "Austen", "314", "Yes");
const animal = new Book("Animal Farm", "Orwell", "157", "No");
addBookToLibrary(hobbit);
addBookToLibrary(pride);
addBookToLibrary(animal);

iterateThroughBooks(myLibrary);