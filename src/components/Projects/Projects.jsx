import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaLongArrowAltRight } from "react-icons/fa";

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
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* project one */}


                    <section className="max-w-sm bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/DrKWqzv/2150671588.jpg" />
                        </a>
                        <section className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Name of the project</h5>
                            </a>
                            <p className="mb-3 font-normal ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            {/* span to hold tags */}
                            <span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                            </span>
                            <a className="text-[#255BF9] flex gap-3 items-center mt-6 " href="www.google.com"><span>View project</span> <FaLongArrowAltRight /></a>
                            
                        </section>
                    </section>
                    {/* project two */}
                    <section className="max-w-sm bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/DrKWqzv/2150671588.jpg" />
                        </a>
                        <section className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Name of the project</h5>
                            </a>
                            <p className="mb-3 font-normal ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            {/* span to hold tags */}
                            <span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                            </span>
                            <a className="text-[#255BF9] flex gap-3 items-center mt-6 " href="www.google.com"><span>View project</span> <FaLongArrowAltRight /></a>
                            
                        </section>
                    </section>
                    {/* project three */}
                    <section className="max-w-sm bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/DrKWqzv/2150671588.jpg" />
                        </a>
                        <section className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Name of the project</h5>
                            </a>
                            <p className="mb-3 font-normal ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            {/* span to hold tags */}
                            <span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                            </span>
                            <a className="text-[#255BF9] flex gap-3 items-center mt-6 " href="www.google.com"><span>View project</span> <FaLongArrowAltRight /></a>
                            
                        </section>
                    </section>
                    {/* project four */}
                    <section className="max-w-sm bg-[#FFFFFF] border-b text-black border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.ibb.co/DrKWqzv/2150671588.jpg" />
                        </a>
                        <section className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Name of the project</h5>
                            </a>
                            <p className="mb-3 font-normal ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            {/* span to hold tags */}
                            <span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
                                <span className="bg-[#FAFAFA] p-1 font-semibold text-sm rounded-sm">Tag one</span>
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