const title = document.getElementById('title')
const author = document.getElementById('author')
const price = document.getElementById('price')
const inStock = document.getElementById('InStock')
const bookList = document.getElementById('book-list')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(e){
    e.preventDefault()

    if(title.value == "" && author.value == "" && price.value == ""){
        alert("Fill The Form Please");
    } else {
        const newRow = document.createElement('section')
        const newTitle = document.createElement('div')
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle);
    }

});

console.log(title)
console.log(author)
console.log(price)
console.log(inStock)
console.log(bookList)
console.log(btn)





