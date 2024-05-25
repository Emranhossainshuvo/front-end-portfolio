import { BiLogoMongodb } from "react-icons/bi";
import { DiGit } from "react-icons/di";
import {  FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFirebase, SiJsonwebtokens } from "react-icons/si";

const Skills = () => {




    return (
        <>
            {/* div to hold everything */}
            <div className="mt-5 p-2">
                {/* div for the title and description texts */}
                <div className="md:flex md:justify-between mb-20 md:items-center">
                    <div className="md:w-11/12">
                        <p className="mb-4 text-center md:text-start">My skills</p>
                        <h3 className="text-3xl font-semibold text-center md:text-start">I love to learn new technologies and it become my habit</h3>
                    </div>
                    <div className="md:w-11/12 text-center md:text-start">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis minus aspernatur cupiditate, corrupti minima tempora. Quod omnis atque voluptas quaerat tenetur, ducimus harum sint impedit debitis ex repellendus obcaecati aliquid?</p>
                    </div>
                </div>

                {/* div to hold skill classes */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* first skills */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-blue-100 shadow-blue-300 shadow-sm rounded-full flex items-center justify-center">
                                <FaReact className="text-blue-600 text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">ReactJS</h4>
                        <p className=" text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </div>
                    {/* second skill  */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-white shadow-black shadow-sm rounded-full flex items-center justify-center">
                                <RiTailwindCssFill className="text-blue-600 text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Tailwind CSS</h4>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </div>
                    {/* third skill  */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-[#C6E9BC] shadow-[#C6E9BC] shadow-sm rounded-full flex items-center justify-center">
                                <FaNode className="text-blue-600 text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">NodeJS</h4>
                        <p className="  text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </div>
                    {/* fourth skill  */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-[#F1C617] shadow-[#F1C617] shadow rounded-full flex items-center justify-center">
                                <SiExpress className="text-black text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">ExpressJS</h4>
                        <p className="  text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </div>
                    {/* fifth skill */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-[#0B9EE6] shadow-[#0B9EE6] shadow rounded-full flex items-center justify-center">
                                <SiFirebase className="text-[#FFCE35] text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Firebase</h4>
                        <p className="  text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </div>
                    {/* sixth skill */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-white shadow-black shadow rounded-full flex items-center justify-center">
                                <DiGit className="text-[#F05539] text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Git</h4>
                        <p className="  text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </div>
                    {/* seventh skill */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-black shadow-black shadow rounded-full flex items-center justify-center">
                                <SiJsonwebtokens className=" text-white text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">JWT - JSON Web Token</h4>
                        <p className="  text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </div>
                    {/* eighth skill */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-[#001E2B] shadow-[#001E2B] shadow rounded-full flex items-center justify-center">
                                <BiLogoMongodb className="text-[#00ED64] text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Mongodb</h4>
                        <p className="  text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Skills;