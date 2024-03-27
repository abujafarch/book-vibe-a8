import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
const Nav = () => {
    return (
        <nav className="flex justify-between items-center md:my-8 my-4 lg:my-12">
            <div className="font-work font-bold text-[32px] text-[#131313] cursor-pointer">
                <h1>Book Vibe</h1>
            </div>

            <div >
                <div><a className="md:hidden text-2xl cursor-pointer"> <FiMenu></FiMenu> </a></div>
                <div className="md:flex gap-8 text-[#131313CC] text-lg items-center hidden">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/listed-books'>Listed Books</NavLink>
                    <NavLink to='/pages-to-read'>Pages to Read</NavLink>
                </div>
            </div>

            <div className="md:flex gap-4 hidden">
                <button className="bg-[#23BE0A] px-7 py-3 rounded-lg text-white font-semibold text-lg">Sign In</button>
                <button className="bg-[#59C6D2] px-7 py-3 rounded-lg text-white font-semibold text-lg">Sign Up</button>
            </div>
        </nav>
    );
};

export default Nav;