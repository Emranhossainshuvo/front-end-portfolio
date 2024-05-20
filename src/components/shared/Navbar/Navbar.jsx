import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <>
            {/* main div to hold everything in the navbar file */}
            <div className="flex justify-between items-center">
                {/* div for left side element such as name and icon */}
                <div>
                    <h3>Md. Emran Hossain</h3>
                </div>
                <div className="menu-icon md:hidden" onClick={handleToggle}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <div className={`menu-links md:flex ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex items-center gap-5">
                        <li>About</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Navbar;