import { FaRegStar } from "react-icons/fa";
const BookCard = ({book}) => {
    const {bookName, author, image, tags, category, rating} = book
    return (
        <div className="card border-2 border-[#13131326] rounded-2xl p-4 md:p-6 cursor-pointer">
            <div className='bg-[#F3F3F3] rounded-2xl py-6 flex justify-center'>
                <img src={image} className='max-w-[110px]' />
            </div>
            <div className="mt-6">
                <div className='flex gap-4 mb-4 items-center'>

                    {
                        tags.map((tag, indx)=> <a key={indx} href="#" className='text-[#23BE0A] font-medium font-work bg-[#23BE0A0D] px-3 py-1 rounded-badge'>{tag}</a>)
                    }
                </div>
                <h2 className="md:text-2xl text-xl font-bold text-[#131313] mb-3 font-playfair">{bookName}</h2>
                <p className='font-medium text-[#131313CC]'>By : {author}</p>
                <hr className='border-dashed my-3'/>
                <div className="card-actions justify-between">
                    <p className="">{category}</p>
                    <p className="flex gap-3 items-center"><span>{rating}</span> <FaRegStar></FaRegStar> </p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;