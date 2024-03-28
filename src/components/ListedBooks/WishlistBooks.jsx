import { useEffect, useState } from "react";
import ReadBook from "./ReadBook";
import { getWishLists } from "../Utilities/localStorage";
import WishlistBook from "./WishlistBook";

const WishlistBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const books = getWishLists()
        setBooks(books)

    }, [])
    return (
        <div className="mt-8 flex gap-5 flex-col">
            {
                books.map((book) => <WishlistBook key={book.bookId} book={book}></WishlistBook>)
            }
            {/* <ReadBook></ReadBook> */}
        </div>
    );
};

export default WishlistBooks;