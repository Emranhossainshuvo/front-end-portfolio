import { FaGithub } from 'react-icons/fa';
import './banner.css'
import { RxResume } from 'react-icons/rx';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <>
            {/* div for hold everything in this page */}
            <div className="w-full md:flex justify-between items-center h-[80vh]">
                {/* extra two section for hold two section texts and picture  */}

                <section className='w-1/2'>
                    {/* texts about me */}
                    <p className="mb-6 text-lg font-semibold text-shadow">Hello there, and welcome to my place</p>
                    <h2 className='text-5xl mb-3 font-semibold'>I&apos;m Emran Hossain</h2>
                    <h2 className='text-3xl mb-6 font-semibold text-[#FF0642]'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Frontend expert",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Mern developer",
                                1000,
                                "backend specialist",
                                1000,
                                "Deployment expert",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur quod veritatis ab, voluptas enim. Repellendus in, asperiores, magnam rem nemo ipsa explicabo consequatur atque debitis architecto amet dolor? Illum.</p>
                    {/* section to hold my social linkd */}
                    <section className='py-5'>
                        <ul className='flex gap-5'>
                            <li><button className='flex border-[#078D84] border-[1px] hover:bg-[#078D84] p-4 rounded-lg items-center gap-1'> <p>Github</p> <FaGithub /></button></li>
                            <li><button className='flex border-[#078D84] border-[1px] hover:bg-[#078D84] p-4 rounded-lg items-center gap-1'> <p>Resume</p> <RxResume /></button></li>
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