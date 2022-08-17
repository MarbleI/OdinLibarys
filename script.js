const main = document.getElementById('main');
const submitButton = document.querySelector('#submits');
const title1 = document.getElementById("title1");
const author1 = document.querySelector("#author1");
const pages1 = document.querySelector("#pages1");
const isRead1 = document.querySelector("#isRead1");


function books(title, author, pages, isRead) {
    return {
        title,
        author,
        pages,
        isRead,
    }
};
const hobb = new books('hoblet', 'pierce', 234, true);
const zeertdfs = new books('Trent and the stne', 'pierce', 3245, false);
makeTile(hobb);
makeTile(zeertdfs);
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
    pages.textContent = `Pages: ${book.pages}`;
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
    isRead.addEventListener(`click`, (event) => {
        if (book.isRead) {
            isRead.textContent = `Mark as read`
            book.isRead = false
            div.classList.add('hasNotRead');
            div.classList.remove('hasRead');
        } else {
            isRead.textContent = `Mark as not read`
            book.isRead = true
            div.classList.add('hasRead');
            div.classList.remove('hasNotRead');
        }
     })
    div.appendChild(isRead);
    return isRead;
};
function makeEdit(div, book) {
    const edit = document.createElement('button')
    edit.setAttribute('id', 'edit'); 
    edit.textContent = `Edit`
    edit.addEventListener('click', (event) => {
        savestate();
        div.remove();
    })
    div.appendChild(edit);
    return edit;
};
function makeTile(book) {
    const div = makeDiv()
    const title = makeTitle(div, book)
    const author = makeAuthor(div, book)
    const pages = makePages(div, book)
    const isRead = makeIsRead(div, book)
    const edit = makeEdit(div, book)
}
function reset (){
    title1.value = "";
    author1.value = "";
    pages1.value = "";
    isRead1.checked = false;
}
function savestate (div, book) {
    title1.value = title.textContent;
    author1.value = author.textContent;
    pages1.value = pages.textContent;
}
submitButton.addEventListener(`click`, (event) => {
    const book = new books(title1.value, author1.value, pages1.value, isRead1.checked);
    makeTile(book);
    reset();
 })
