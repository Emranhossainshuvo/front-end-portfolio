import { FaGithub } from 'react-icons/fa';
import './banner.css'
import { RxResume } from 'react-icons/rx';

const Banner = () => {
    return (
        <>
            {/* div for hold everything in this page */}
            <div className="w-full md:flex justify-between items-center h-[80vh]">
                {/* extra two section for hold two section texts and picture  */}

                <section>
                    {/* texts about me */}
                    <p className="text-xl font-semibold mb-5">Hello there, and welcome to my place</p>
                    <h2 className='text-5xl font-semibold'>I&apos;m Emran Hossain</h2>
                    <h2 className='text-5xl font-semibold text-[#E2DFD0]'>A full stact developer</h2>
                    {/* section to hold my social linkd */}
                    <section className='py-5'>
                        <ul className='flex gap-5'>
                            <li><button className='flex items-center gap-1'> <p>Github</p> <FaGithub /></button></li>
                            <li><button className='flex items-center gap-1'> <p>Resume</p> <RxResume /></button></li>
                        </ul>
                    </section>
                </section>
                <section>
                    <img className="w-96 px-4 rounded-md" src="https://i.ibb.co/3rhzz4M/IMG-20231209-080753-removebg-4-removebg-preview.png" alt="" />
                </section>
            </div >
        </>
    );
};

export default Banner;