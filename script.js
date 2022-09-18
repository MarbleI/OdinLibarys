const table = document.getElementById('table'); 
const nTitle = document.getElementById('title')
const nAuthor = document.getElementById('author')
const nPages = document.getElementById('pages')
const nRead = document.getElementById('isRead')
const submitButton = document.getElementById('submit')

let myLibrary = []
const hobbit = new book("The Hobbit", "friendly", 256, false)
const yourmom = new book("Your mom", "me", 901, true)
const interesting = new book("Interesting", "Don Oliver", 289, false)
myLibrary.push(hobbit)
myLibrary.push(yourmom)
myLibrary.push(interesting)

submitButton.addEventListener(`click`, (event) => {
    resetList()
})
function resetList() {
    for (let i of myLibrary) {
        const tr = document.getElementById(i.id)
        tr.remove()
    }
    let x=0
    const books = new book(nTitle.value, nAuthor.value, nPages.value, nRead.checked);
    myLibrary.push(books)
    reset()
    for (let i of myLibrary) {
        x+=1
        i.id = x
        addToLibrary(i);        
    }
}

function book(title, author, pages, read) {
    this.id = 0
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function makeRow(book) {
    const tr = document.createElement("tr") 
    tr.setAttribute('id', book.id);
    table.appendChild(tr)
    return tr
}
function makeIndex(tr, book) {
    const td = document.createElement("td")
    td.setAttribute("id", `index${book.id}`)
    td.innerHTML = book.id
    tr.appendChild(td)

}
function makeTitle(tr, book) {
    const td = document.createElement("td")
    td.setAttribute("id", `title${book.id}`)
    td.innerHTML = book.title
    tr.appendChild(td)

}
function makeAuthor(tr, book) {
    const td = document.createElement("td")
    td.setAttribute("id", `author${book.id}`)
    td.innerHTML = book.author
    tr.appendChild(td)

}
function makePages(tr, book) {
    const td = document.createElement("td")
    td.setAttribute("id", `pages${book.id}`)
    td.innerHTML = book.pages
    tr.appendChild(td)

}
function makeRead(tr, book) {
    const td = document.createElement("td")
    td.setAttribute("id", `read${book.id}`)
    td.innerHTML = book.read
    if (book.read == true) {
        td.setAttribute("class", `hasRead`)
    } else {
        td.setAttribute("class", `notRead`)

    }
    tr.appendChild(td)

}
function reset() {
    nTitle.value = ''
    nAuthor.value = ''
    nPages.value = 0
    nRead.value = false
}
function makeEdit(tr, book) {
    const td = document.createElement("td")
    const edit = document.createElement("button")
    edit.innerHTML = "edit"
    edit.addEventListener(`click`, (event) => {
        nTitle.value = book.title
        nAuthor.value = book.author
        nPages.value = book.pages
        nRead.checked = book.read
        tr.remove()
        myLibrary.splice(myLibrary.indexOf(book), 1)
        for (let i of myLibrary) {
            const tr = document.getElementById(i.id)
            tr.remove()
        }
        let x =0
        for (let i of myLibrary) {
            x+=1
            i.id = x
            addToLibrary(i);        
        }
        
    })
    td.appendChild(edit)
    tr.appendChild(td)
}
function addToLibrary(book) {
    const tr = makeRow(book)
    makeIndex(tr, book)
    makeTitle(tr, book)
    makeAuthor(tr, book)
    makePages(tr, book)
    makeRead(tr, book)
    makeEdit(tr, book)
}
let x = 0
for (let i of myLibrary) {
    x+=1
    i.id = x
    addToLibrary(i);        
}
