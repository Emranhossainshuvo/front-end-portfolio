import { BiLogoMongodb } from "react-icons/bi";
import { DiGit } from "react-icons/di";
import { FaNode, FaReact } from "react-icons/fa";
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
                        <p>I love to explore new technologies. I read documentations of various technologies then I ipmlement these technologies to my existing projects. Sometimes I got errors but most of the time it works perfectly.</p>
                    </div>
                </div>

                {/* div to hold skill classes */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* first skills */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-2">
                            <div className="w-16 h-16 bg-blue-100 shadow-blue-300 shadow-sm rounded-full flex items-center justify-center">
                                <FaReact className="text-blue-600 text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">ReactJS</h4>
                        <p className=" text-center">
                            After learning the basics of React I start upgrading my ability in React.
                        </p>
                    </div>
                    {/* second skill  */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-2">
                            <div className="w-16 h-16 bg-white shadow-black shadow-sm rounded-full flex items-center justify-center">
                                <RiTailwindCssFill className="text-blue-600 text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Tailwind CSS</h4>
                        <p className="text-center">
                            TailwindCSS help me do a lot things in a short amount of time like grid, animation, responsive layouts etc.
                        </p>
                    </div>
                    {/* third skill  */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-2">
                            <div className="w-16 h-16 bg-[#C6E9BC] shadow-[#C6E9BC] shadow-sm rounded-full flex items-center justify-center">
                                <FaNode className="text-blue-600 text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">NodeJS</h4>
                        <p className="  text-center">
                            I have basic expertise in Node.js, a powerful JavaScript runtime built on Chrome&apos;s V8 engine.
                        </p>
                    </div>
                    {/* fourth skill  */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-2">
                            <div className="w-16 h-16 bg-[#F1C617] shadow-[#F1C617] shadow rounded-full flex items-center justify-center">
                                <SiExpress className="text-black text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">ExpressJS</h4>
                        <p className="  text-center">
                            I am proficient in ExpressJS, a minimal and flexible Node.js web application framework
                        </p>
                    </div>
                    {/* fifth skill */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  py-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-2">
                            <div className="w-16 h-16 bg-[#0B9EE6] shadow-[#0B9EE6] shadow rounded-full flex items-center justify-center">
                                <SiFirebase className="text-[#FFCE35] text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Firebase</h4>
                        <p className="text-center">
                            I am well-versed in Firebase, a comprehensive app development  and authentication platform by Google.
                        </p>
                    </div>
                    {/* sixth skill */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-2">
                            <div className="w-16 h-16 bg-white shadow-black shadow rounded-full flex items-center justify-center">
                                <DiGit className="text-[#F05539] text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Git</h4>
                        <p className="  text-center">
                            I am proficient in Git, a version control system that enables me to track changes in source code.
                        </p>
                    </div>
                    {/* seventh skill */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-2">
                            <div className="w-16 h-16 bg-black shadow-black shadow rounded-full flex items-center justify-center">
                                <SiJsonwebtokens className=" text-white text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">JWT - JSON Web Token</h4>
                        <p className="  text-center">
                            I have basic expertise in JWT, a self-contained way for transmitting information between parties securely.
                        </p>
                    </div>
                    {/* eighth skill */}
                    <div className="bg-white hover:bg-cyan-800 delay-200 hover:text-white text-black  p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-2">
                            <div className="w-16 h-16 bg-[#001E2B] shadow-[#001E2B] shadow rounded-full flex items-center justify-center">
                                <BiLogoMongodb className="text-[#00ED64] text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Mongodb</h4>
                        <p className="  text-center">
                            I am proficient in MongoDB, it allows me to store and manage large sets of unstructured data with flexibility and scalability.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Skills;