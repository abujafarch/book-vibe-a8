import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-4 min-h-screen px-5">
            <h1 className="bg-red-700 text-center p-6 rounded-xl font-bold font-work text-white text-2xl">Oops! Page not found thats you Looking for</h1>
            <Link to='/' className="bg-green-700 text-white px-5 text-xl py-3 rounded-xl">Go Back</Link>
        </div>
    );
};

export default NotFound;