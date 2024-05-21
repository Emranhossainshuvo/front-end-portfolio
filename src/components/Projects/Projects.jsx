import { FaLongArrowAltRight } from "react-icons/fa";

const Projects = () => {
    return (
        <>
            {/* section to hold everything in this file  */}
            <section className="mb-20">
                {/* section to hold section title */}
                <section className="mb-20 text-center">
                    <section className="w-11/12">
                        <p className="mb-4">My Projects</p>
                        <h3 className="text-3xl font-semibold mb-6">Look at my recent works</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </section>
                </section>

                {/* section to hold project cards*/}
                <section className="grid grid-cols-1 w-full md:grid-cols-2 gap-6">
                    {/* project one */}

                    <section className="  bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/K6jk1Tc/2147770898.jpg" />
                        </a>
                        <section className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Global atlas</h5>
                            </a>
                            <p className="mb-3 font-normal ">I&apos;ve created an application where I share my all knowledge about Geography.Currently I&apos;m learning and this application works as my notebook.</p>
                            {/* span to hold tags */}
                            <span className="flex gap-1">
                                <span className="bg-[#DBEAFE] p-2 font-semibold text-xs rounded-md">React</span>
                                <span className="bg-[#1B60B0] p-2 font-semibold text-xs rounded-md text-white">TailwindCSS</span>
                                <span className="bg-[#C6E9BC] p-2 font-semibold text-xs rounded-md">Node</span>
                            </span>
                            <a className="text-[#255BF9] flex gap-3 items-center mt-6 " href="www.google.com"><span>View project</span> <FaLongArrowAltRight /></a>

                        </section>
                    </section>
                    {/* project two */}
                    <section className="  bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/tQJyTpL/164212.jpg" />
                        </a>
                        <section className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ninja-learning</h5>
                            </a>
                            <p className="mb-3 font-normal ">It is an application I created to make an online education app. I&apos;ll be a teacher at my own learning application.</p>
                            {/* span to hold tags */}
                            <span className="flex gap-1">
                                <span className="bg-[#001E2B] p-2 text-white font-semibold text-xs rounded-md">Mongodb</span>
                                <span className="bg-[#F1C617] p-2 font-semibold text-xs rounded-md">Express</span>
                                <span className="bg-[#0B9EE6] p-2 font-semibold text-xs rounded-md">Firebase</span>
                            </span>
                            <a className="text-[#255BF9] flex gap-3 items-center mt-6 " href="www.google.com"><span>View project</span> <FaLongArrowAltRight /></a>

                        </section>
                    </section>
                    {/* project three */}
                    <section className="  bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/mhtMm4s/125055.jpg" />
                        </a>
                        <section className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Shongjukti</h5>
                            </a>
                            <p className="mb-3 font-normal ">This is my personal blog website, i write down my thougts recent experience etc there. I also share my knowledge as well.  </p>
                            {/* span to hold tags */}
                            <span className="flex gap-1">
                                <span className="bg-[#C6E9BC] p-2 font-semibold text-xs rounded-md">Node</span>
                                <span className="bg-[#001E2B] p-2 text-white font-semibold text-xs rounded-md">Mongodb</span>
                                <span className="bg-[#DBEAFE] p-2 font-semibold text-xs rounded-md">React</span>
                            </span>
                            <a className="text-[#255BF9] flex gap-3 items-center mt-6 " href="www.google.com"><span>View project</span> <FaLongArrowAltRight /></a>

                        </section>
                    </section>
                    {/* project four */}
                    <section className="  bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/tzCYHyJ/42439.jpg" />
                        </a>
                        <section className="p-5">
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
                            <a className="text-[#255BF9] flex gap-3 items-center mt-6 " href="www.google.com"><span>View project</span> <FaLongArrowAltRight /></a>

                        </section>
                    </section>

                </section>
            </section>

        </>
    );
};

export default Projects;