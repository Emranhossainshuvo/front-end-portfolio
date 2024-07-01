import { FaLongArrowAltRight } from "react-icons/fa";


const Projects = () => {


    return (
        <>
            {/* div to hold everything in this file  */}
            <div id="project" className="mt-5 p-2">
                {/* div to hold div title */}
                <div className="mb-20 text-center">
                    <div className="w-11/12">
                        <p className="mb-4">My Projects</p>
                        <h3 className="text-3xl font-semibold mb-6">Look at my recent works</h3>
                    </div>
                </div>

                {/* div to hold project cards*/}
                <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
                    {/* project one */}

                    <div className=" cursor-pointer bg-[#FFFFFF]  border-b text-black border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg" src="https://i.ibb.co/XV7GfJV/2150165162.jpg" />
                        <div className="p-5">
                            <span>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Revive<span className="text-xs ms-2 border-[1px] font-medium rounded-md p-1 border-black">Team project</span></h5>
                            </span>
                            <p className="mb-3 font-normal ">Me, and my friends created a Health and Fitness application called Revive. we spent countless hours to develop this. Defenetly check it out.</p>
                            {/* span to hold tags */}
                            <span className="flex gap-1">
                                <span className="bg-[#DBEAFE] p-2 font-semibold text-xs rounded-md">React</span>
                                <span className="bg-[#1B60B0] p-2 font-semibold text-xs rounded-md text-white">TailwindCSS</span>
                                <span className="bg-[#C6E9BC] p-2 font-semibold text-xs rounded-md">Node</span>
                            </span>
                            <section className="flex justify-between">
                                <a target="_blank" className="text-[#255BF9] flex gap-3 items-center mt-6 " href="https://github.com/DevelopersZone06/revive-client"><span className="hover:font-bold ">Github repository</span> <FaLongArrowAltRight /></a>
                                <a target="_blank" className="text-[#255BF9] flex gap-3 items-center mt-6 " href="https://revive-health.netlify.app/"><span className="hover:font-bold ">Live link</span> <FaLongArrowAltRight /></a>
                            </section>

                        </div>
                    </div>
                    {/* project two */}
                    <div className=" cursor-pointer  bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/Sw48Xxh/Screenshot-2024-06-22-080311.png" />
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">News portal</h5>
                            </a>
                            <p className="mb-3 font-normal ">News portal is an online news application where people can consume online news all over the world.</p>
                            {/* span to hold tags */}
                            <span className="flex gap-1">
                                <span className="bg-[#001E2B] p-2 text-white font-semibold text-xs rounded-md">Mongodb</span>
                                <span className="bg-[#F1C617] p-2 font-semibold text-xs rounded-md">Express</span>
                                <span className="bg-[#0B9EE6] p-2 font-semibold text-xs rounded-md">Firebase</span>
                            </span>
                            <section className="flex justify-between">
                                <a target="_blank" className="text-[#255BF9] flex gap-3 items-center mt-6 " href="https://github.com/Emranhossainshuvo/react-news-portal"><span className="hover:font-bold ">Github repository</span> <FaLongArrowAltRight /></a>
                                <a target="_blank" className="text-[#255BF9] flex gap-3 items-center mt-6 " href="https://react-news-tsbe.netlify.app/"><span className="hover:font-bold ">Live link</span> <FaLongArrowAltRight /></a>
                            </section>

                        </div>
                    </div>
                    {/* project three */}
                    <div className=" cursor-pointer bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/5n4LpkT/gulfer-ergin-LUGu-Ctvlk1-Q-unsplash.jpg" />
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Book swap</h5>
                            </a>
                            <p className="mb-3 font-normal ">This is a social book sharing platform where people can share their old books to another readers  </p>
                            {/* span to hold tags */}
                            <span className="flex gap-1">
                                <span className="bg-[#C6E9BC] p-2 font-semibold text-xs rounded-md">Node</span>
                                <span className="bg-[#001E2B] p-2 text-white font-semibold text-xs rounded-md">Mongodb</span>
                                <span className="bg-[#DBEAFE] p-2 font-semibold text-xs rounded-md">React</span>
                            </span>
                            <section className="flex justify-between">
                                <a target="_blank" className="text-[#255BF9] flex gap-3 items-center mt-6 " href="https://github.com/Emranhossainshuvo/book-share"><span className="hover:font-bold ">Github repository</span> <FaLongArrowAltRight /></a>
                                <a className="text-[#255BF9] flex gap-3 items-center mt-6 " href="https://bookswap-mern.netlify.app/"><span className="hover:font-bold ">Live link</span> <FaLongArrowAltRight /></a>
                            </section>

                        </div>
                    </div>
                    {/* project four */}
                    <div className=" cursor-pointer bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/tzCYHyJ/42439.jpg" />
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Fruid brush shop <span className="text-xs border-[1px] font-medium rounded-md p-1 border-black">Under construction</span></h5>
                            </a>
                            <p className="mb-3 font-normal ">This is an online fruit shop to buy fruits. this application has stripe payment feature along with mongodb database.</p>
                            {/* span to hold tags */}
                            <span className="flex gap-1">
                                <span className="bg-[#DBEAFE] p-2 font-semibold text-xs rounded-md">React</span>
                                <span className="bg-[#D740FF] p-2 font-semibold text-xs rounded-md">JWT</span>
                                <span className="bg-[#377CC8] p-2 font-semibold text-xs rounded-md">Typescript</span>
                            </span>
                            <section className="flex justify-between">
                                <a className="text-[#255BF9] flex gap-3 items-center mt-6 " href="https://github.com/Emranhossainshuvo/bagMart"><span className="hover:font-bold ">Github repository</span> <FaLongArrowAltRight /></a>
                                <a className="text-[#255BF9] flex gap-3 items-center mt-6 " href="https://bagmart.netlify.app/"><span className="hover:font-bold ">Live link</span> <FaLongArrowAltRight /></a>
                            </section>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Projects;