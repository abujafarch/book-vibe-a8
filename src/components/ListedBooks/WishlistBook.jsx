import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaRegFileLines } from "react-icons/fa6";
import { Link } from "react-router-dom";
const WishlistBook = ({book}) => {
    const { bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublish, tags } = book
    return (
        <div className="sm:p-6 p-3 rounded-2xl border-[1px] items-center sm:items-start flex flex-col md:flex-row gap-6">
            <div className="w-full sm:w-[230px] flex justify-center items-center h-[230px] bg-[#1313130D] rounded-2xl">
                <img className="" src={image} />
            </div>

            <div className="sm:flex-1 w-full">
                <h1 className="font-bold text-2xl text-[#131313]">{bookName}</h1>
                <p>By : {author}</p>
                <div className="flex sm:items-center sm:flex-row flex-col gap-4 mt-3">
                    <div className="flex gap-5 items-center" >
                        <p className="font-bold text-[#131313] font-work">Tag</p>
                        <div className="flex gap-3 items-center">
                            {
                                tags.map((tag, indx) => <a key={indx} href="#" className='text-[#23BE0A] font-medium font-work bg-[#23BE0A0D] px-3 py-1 rounded-badge'>#{tag}</a>)
                            }
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-[#424242]"><IoLocationOutline></IoLocationOutline></p>
                        <p className="font-work text-[#131313CC] text-base">Year of Publishing: {yearOfPublish}</p>
                    </div>
                </div>
                <div className="flex gap-5 sm:flex-row flex-col sm:items-center mt-4">
                    <p className="flex gap-2 items-center text-[#13131399] font-work"><GoPeople></GoPeople> Publisher: {publisher}</p>
                    <p className="flex gap-2 items-center text-[#13131399] font-work"><FaRegFileLines></FaRegFileLines> Page {totalPages}</p>
                </div>
                <hr className="my-4 flex-1 border-[1px]" />
                <div className="flex sm:items-center sm:flex-row flex-col gap-3">
                    <button className="text-[#328EFF] font-work bg-[#328EFF26] px-3 py-2 rounded-[30px]">Category: {category}</button>
                    <button className="text-[#FFAC33] font-work bg-[#FFAC3326] px-3 py-2 rounded-[30px]">Rating: {rating}</button>
                    <Link to={`../../book-review/${book.bookId}`}>
                        <button className="text-white font-work bg-[#23BE0A] px-3 py-2 rounded-[30px]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WishlistBook;