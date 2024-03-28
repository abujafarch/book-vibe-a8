import { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="flex items-end">
            <div role="tablist" className="tabs tabs-lifted justify-start font-work text-[#131313CC]">
                <Link to='' role="tab" onClick={() => { setIndex(0) }} className={`tab text-base sm:text-lg h-fit ${index === 0 ? 'tab-active' : ''}`}>Read Books</Link>

                <Link to='wishlist-books' role="tab" onClick={() => { setIndex(1) }} className={`tab sm:text-lg text-base  h-fit ${index === 1 ? 'tab-active' : ''}`}>Wishlist Books</Link>
            </div>
            <div className="flex-1">
                <hr />
            </div>
        </div>
    );
};

export default Tabs;