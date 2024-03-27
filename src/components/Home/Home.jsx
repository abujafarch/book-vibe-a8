import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Home = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-3 lg:px-4">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;