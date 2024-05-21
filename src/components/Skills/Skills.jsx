import { DiMongodb } from "react-icons/di";
import { FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {




    return (
        <>
            {/* section to hold everything */}
            <section>
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
                            <div className="w-16 h-16 bg-[#1F1F1F] shadow-[#1F1F1F] shadow rounded-full flex items-center justify-center">
                                <DiMongodb className="text-blue-600 text-3xl" />
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">Mongodb</h4>
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