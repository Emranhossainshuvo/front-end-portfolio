import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "../Banner/Banner";

const Main = () => {
    return (
        <div className="font-primary text-white max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;