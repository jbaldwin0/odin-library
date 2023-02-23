const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}
/*
function iterateThroughBooks() {
    for (const book in myLibrary) {
        return `${author}, ${title}, ${pages}, ${read}`;
    }
}
*/
const hobbit = new Book("The Hobbit", "Tolkien", "255", "Yes");
addBookToLibrary(hobbit);
console.log(myLibrary.pop());