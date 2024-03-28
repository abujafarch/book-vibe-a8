import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

const ListedBooks = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-[28px] text-[#131313] bg-[#1313130D] px-3 py-8 rounded-2xl mb-8">Books</h1>
            <Tabs></Tabs>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;