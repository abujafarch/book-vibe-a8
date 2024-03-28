import { useLoaderData, useParams } from "react-router-dom";
import { setItems, setWishListsItems } from "../Utilities/localStorage";

const BookReview = () => {
    const booksData = useLoaderData()
    const {bookId} = useParams()
    // console.log(booksData, bookId)
    const bookInArray = booksData.find((book) => book.bookId == bookId)
    const { bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublish, tags } = bookInArray

    const handleToListed = (book) =>{
        setItems(book)
    }
    const handleToWishList = (book)=>{
        setWishListsItems(book)
    }
    // console.log(...bookInArray)
    return (
        <div className="hero">
            <div className="hero-content flex-col h-full lg:flex-row gap-10 items-start w-full p-0">

                <div className="lg:w-[49%] w-full sm:w-[60%] h-full flex justify-center items-center bg-[#1313130D] p-7 md:p-[72px] rounded-2xl">
                    <img src={image} className="h-full w-full lg:w-auto"/>
                </div>

                <div className="lg:w-[51%]">
                    <h1 className="text-[#131313] text-3xl sm:text-[40px] font-bold mb-4 font-playfair">{bookName}</h1>
                    <p className="text-[#131313CC] font-work text-xl font-medium">By: {author}</p>
                    <hr className="my-4" />
                    <p className="text-[#131313CC] font-medium text-xl font-work">{category}</p>
                    <hr className="my-4" />
                    <p><span className="font-bold text-[#131313] font-work">Review:</span> <span className="text-[#131313B3] font-work">{review}</span></p>

                    <div className="mt-12 flex gap-5 items-center" >
                        <p className="font-bold text-[#131313] font-work">Tag</p>
                        <div className="flex gap-3 items-center">
                            {
                                tags.map((tag, indx) => <a key={indx} href="#" className='text-[#23BE0A] font-medium font-work bg-[#23BE0A0D] px-3 py-1 rounded-badge'>#{tag}</a>)
                            }
                        </div>
                    </div>
                    <hr className="my-4" />
                    <table className="table">
                        <tr>
                            <td className="text-[#131313B3] font-work text-base font-medium">Number of Pages:</td>
                            <td className="text-[#131313] font-work text-base font-semibold">{totalPages}</td>
                        </tr>
                        <tr>
                            <td className="text-[#131313B3] font-work text-base font-medium">Publisher:</td>
                            <td className="text-[#131313] font-work text-base font-semibold">{publisher}</td>
                        </tr>
                        <tr>
                            <td className="text-[#131313B3] font-work text-base font-medium">Year of Publishing:</td>
                            <td className="text-[#131313] font-work text-base font-semibold">{yearOfPublish}</td>
                        </tr>
                        <tr>
                            <td className="text-[#131313B3] font-work text-base font-medium">Rating:</td>
                            <td className="text-[#131313] font-work text-base font-semibold">{rating}</td>
                        </tr>
                    </table>
                    <div className="flex gap-4 mt-6">
                        <button onClick={()=>{handleToListed(bookInArray)}} className="border-[1px] rounded-lg px-7 py-3 text-[#131313] font-semibold text-lg">Read</button>
                        <button onClick={()=>{handleToWishList(bookInArray)}} className="bg-[#50B1C9] rounded-lg px-7 py-3 text-white font-semibold text-lg">Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookReview;