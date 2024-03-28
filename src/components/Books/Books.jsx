import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books)
    return (
        <div>
            <h1 className="text-center text-[#131313] font-bold text-4xl mb-10">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 ">
                {
                    books.map(book =><BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;