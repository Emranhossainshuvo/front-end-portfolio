import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="font-primary max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;