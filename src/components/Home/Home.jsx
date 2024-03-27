import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-3 lg:px-4">
            <nav className="flex justify-between">
                <div><h1>Book Vibe</h1></div>
                <div className="flex gap-8">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/listed-books'>Listed Books</NavLink>
                    <NavLink to='/pages-to-read'>Pages to Read</NavLink>
                </div>
                <div>
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Home;