import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="font-primary">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;