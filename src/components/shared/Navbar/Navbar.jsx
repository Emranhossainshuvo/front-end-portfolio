import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    };


    return (
        <>
            {/* main div to hold everything in the navbar file */}
            <div className="flex justify-between pt-7 mb-6 items-center">
                {/* div for left side element such as name and icon */}
                <div>
                    <h3 className="text-2xl font-semibold"><span className="text-[#FF0642]">  Emran</span> Hossain</h3>
                </div>

                <div className={`menu-links absolute md:static top-0 right-5 md:flex ${menuOpen ? 'block' : 'hidden'} text-lg font-medium`}>
                    <ul className="md:flex items-center gap-5">
                        <li>About</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="menu-icon md:hidden" onClick={handleToggle}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>
        </>
    );
};

export default Navbar;