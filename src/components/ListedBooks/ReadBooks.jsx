import { useEffect, useState } from "react";
import { getBooksLists } from "../Utilities/localStorage";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const books = getBooksLists()
        setBooks(books)
        
    },[])
    // console.log(books)
    return (
        <div className="mt-8 flex gap-5 flex-col">
            {
                books.map((book)=> <ReadBook key={book.bookId} book={book}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;