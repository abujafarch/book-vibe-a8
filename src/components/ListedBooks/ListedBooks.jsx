import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

const ListedBooks = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-[28px] text-[#131313] bg-[#1313130D] px-3 py-8 rounded-2xl mb-8">Books</h1>
            <div className="mt-8 mb-12 flex justify-center">
                <div className="bg-[#23BE0A] px-3 py-2 rounded-lg">
                    <select name="" id="sortBy" className="border-none outline-none text-white text-lg font-semibold bg-[#23BE0A]">
                        <option value="totalPages" defaultChecked>Sort By</option>
                        <option value="rating">Rating</option>
                        <option value="totalPages">Number of Pages</option>
                        <option value="yearOfPublish">Published Year</option>
                    </select>
                </div>
            </div>
            <Tabs></Tabs>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;