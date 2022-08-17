const main = document.getElementById('main');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', this.textContent = '5');


function books(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
};

const hobbit = new books("Hobit", "Piecies", "120", true);
const robbit = new books("robbit and the stone", "Piecies", "324323", false);

console.log(hobbit.title)
function makeDiv () {
    const div = document.createElement('div');
    div.setAttribute('id', 'book');
    main.appendChild(div);
    return div;
};

function makeTitle (div, book) {
    const title = document.createElement('p');
    title.setAttribute('id', 'title');
    title.textContent = `Title:\n${book.title}`;
    div.appendChild(title);
    return title;
};
function makeAuthor (div, book) {
    const author = document.createElement('p');
    author.setAttribute('id', 'author');
    author.textContent = `Author:\n${book.author}`;
    div.appendChild(author);
    return author;
};
function makePages (div, book) {
    const pages = document.createElement('p');
    pages.setAttribute('id', 'pages');
    pages.textContent = `${book.pages} pages`;
    div.appendChild(pages);
    return pages;
};
function makeIsRead (div, book) {
    const isRead = document.createElement('button');
    isRead.setAttribute('id', 'isRead');
    if (book.isRead) {
        isRead.textContent = `Mark as not read`
        div.classList.add('hasRead');
    } else {
        isRead.textContent = `Mark as read`
        div.classList.add('hasNotRead');
    }
    div.appendChild(isRead);
    return isRead;
};
function makeEdit(div, book) {
    const edit = document.createElement('button')
    edit.setAttribute('id', 'edit'); 
    edit.textContent = `Edit`
    div.appendChild(edit);
    return edit;
};
function makeTile (book) {
    const div = makeDiv();
    const title = makeTitle(div, book)
    const author = makeAuthor(div, book);
    const pages = makePages(div, book);
    const isRead = makeIsRead(div, book);
    const edit = makeEdit(div, book);
}
makeTile(hobbit);
makeTile(robbit);