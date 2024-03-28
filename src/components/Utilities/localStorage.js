export const getBooksLists = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}

export const setItems = (book) => {
    const books = getBooksLists()
    const validationBook = books.find(booked=> booked.bookId === book.bookId)
    if(validationBook){
        alert('already exists')
    }
    else{
        books.push(book)
    }
    
    // console.log(books)
    const stringifiedBooks = JSON.stringify(books)
    localStorage.setItem('books', stringifiedBooks)
}

export const getWishLists = () => {
    let wishListBooks = [];
    const storedBooks = localStorage.getItem('wishlist_books')
    if (storedBooks) {
        wishListBooks = JSON.parse(storedBooks)
    }
    return wishListBooks
}


export const setWishListsItems = (book) => {
    const wishBooks = getWishLists()
    const books = getBooksLists()
    const validationBook = books.find(booked=> booked.bookId === book.bookId)
    const validationWishBook = wishBooks.find(booked=> booked.bookId === book.bookId)
    if(validationBook ){
        alert('already exists book lists')
    }
    else if(validationWishBook){
        alert('already exists wish lists')
    }
    else{
        wishBooks.push(book)
    }
    
    // console.log(books)
    const stringifiedWishBooks = JSON.stringify(wishBooks)
    localStorage.setItem('wishlist_books', stringifiedWishBooks)
}




