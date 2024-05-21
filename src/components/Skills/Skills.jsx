import { DiGit } from "react-icons/di";
import {  FaNode, FaReact } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFirebase, SiJsonwebtokens } from "react-icons/si";

const Skills = () => {




    return (
        <>
            {/* section to hold everything */}
            <section className="mb-20">
                {/* section for the title and description texts */}
                <section className="flex justify-between mb-20 items-center">
                    <section className="w-11/12">
                        <p className="mb-4">My skills</p>
                        <h3 className="text-3xl font-semibold">I love to learn new technologies and it become my habit</h3>
                    </section>
                    <section className="w-11/12">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis minus aspernatur cupiditate, corrupti minima tempora. Quod omnis atque voluptas quaerat tenetur, ducimus harum sint impedit debitis ex repellendus obcaecati aliquid?</p>
                    </section>
                </section>

                {/* section to hold skill classes */}
                <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* first skills */}
                    <section className="bg-white text-black p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-blue-100 shadow-blue-300 shadow-sm rounded-full flex items-center justify-center">
                                <FaReact className="text-blue-600 text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">ReactJS</h4>
                        <p className="text-gray-600 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </section>
                    {/* second skill  */}
                    <section className="bg-white text-black   p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-white shadow-black shadow-sm rounded-full flex items-center justify-center">
                                <RiTailwindCssFill className="text-blue-600 text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Tailwind CSS</h4>
                        <p className="text-gray-600 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </section>
                    {/* third skill  */}
                    <section className="bg-white text-black   p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-[#C6E9BC] shadow-[#C6E9BC] shadow-sm rounded-full flex items-center justify-center">
                                <FaNode className="text-blue-600 text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">NodeJS</h4>
                        <p className="text-gray-600 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </section>
                    {/* fourth skill  */}
                    <section className="bg-white text-black   p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-[#F1C617] shadow-[#F1C617] shadow rounded-full flex items-center justify-center">
                                <SiExpress className="text-black text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">ExpressJS</h4>
                        <p className="text-gray-600 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </section>
                    {/* fifth skill */}
                    <section className="bg-white text-black   p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-[#0B9EE6] shadow-[#0B9EE6] shadow rounded-full flex items-center justify-center">
                                <SiFirebase className="text-[#FFCE35] text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Firebase</h4>
                        <p className="text-gray-600 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </section>
                    {/* sixth skill */}
                    <section className="bg-white text-black   p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-white shadow-black shadow rounded-full flex items-center justify-center">
                                <DiGit className="text-[#F05539] text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Git</h4>
                        <p className="text-gray-600 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </section>
                    {/* seventh skill */}
                    <section className="bg-white text-black   p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-black shadow-black shadow rounded-full flex items-center justify-center">
                                <SiJsonwebtokens className=" text-white text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">JWT - JSON Web Token</h4>
                        <p className="text-gray-600 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </section>
                    {/* eighth skill */}
                    <section className="bg-white text-black   p-6 rounded-md shadow-lg">

                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-[#EEA47FFF] shadow-[#EEA47FFF] shadow rounded-full flex items-center justify-center">
                                <GrDeploy className="text-[#00539CFF] text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Deployment</h4>
                        <p className="text-gray-600 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt.
                        </p>
                    </section>
                </section>

            </section>
        </>
    );
};

export default Skills;