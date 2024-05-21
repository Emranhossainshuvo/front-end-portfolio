import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <div className="font-primary text-white max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;