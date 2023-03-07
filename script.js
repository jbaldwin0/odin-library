const myLibrary = [];
const shelf = document.getElementById("shelf");

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
        const book = `
        <div class="books">
            <p>Title: ${library[i].title}</p>
            <p>Author: ${library[i].author}</p>
            <p>Pages: ${library[i].pages}</p>
            <p>Read: ${library[i].read}</p>
            <div id="options">
                <button>Remove</button>
                <button>Read</button>
            </div>
        </div>
        `;
        shelf.insertAdjacentHTML("beforeend", book);
        // Perform iteration action
    }
}

const submit = document.getElementById("submit");

submit.addEventListener("click", () =>{
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    const book = `
    <div class="books">
        <p>Title: ${title}</p>
        <p>Author: ${author}</p>
        <p>Pages: ${pages}</p>
        <p>Read: ${read}</p>     
    </div>
    `;
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "";
    shelf.insertAdjacentHTML("afterbegin", book);
});

const hobbit = new Book("The Hobbit", "Tolkien", "255", "Yes");
const pride = new Book("Pride and Prejudice", "Austen", "314", "Yes");
const animal = new Book("Animal Farm", "Orwell", "157", "No");
addBookToLibrary(hobbit);
addBookToLibrary(pride);
addBookToLibrary(animal);

iterateThroughBooks(myLibrary);