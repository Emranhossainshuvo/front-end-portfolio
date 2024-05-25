import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Footer from "../shared/Footer/Footer";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";

const Main = () => {
    return (
        <div className="font-primary text-white max-w-7xl mx-auto">
            <Navbar />
            <Banner />
            <Skills />
            <Projects />
            <Contacts />
            <Outlet />  
            <Footer />
        </div>
    );
};

export default Main;