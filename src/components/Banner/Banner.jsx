import { FaGithub } from 'react-icons/fa';
import './banner.css'
import { RxResume } from 'react-icons/rx';
import { TypeAnimation } from 'react-type-animation';

const Banner= () => {
    return (
        <>
            {/* div for hold everything in this page */}
            <div className="w-full md:flex p-2 mt-5 justify-between items-center h-auto">
                {/* extra two div for hold two div texts and picture  */}

                <div className='md:w-1/2'>
                    {/* texts about me */}
                    <p className="mb-3 text-center md:text-start text-lg font-semibold text-shadow">Hello there, and welcome to my place</p>
                    <h2 className='text-5xl text-center md:text-start mb-3 font-semibold'>I&apos;m Emran Hossain</h2>
                    <h2 className='text-3xl mb-3 text-center md:text-start font-semibold text-[#FF0642]'>
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
                    <p className='mb-6 text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur quod veritatis ab, voluptas enim. Repellendus in, asperiores, magnam rem nemo ipsa explicabo consequatur atque debitis architecto amet dolor? Illum.</p>
                    {/* div to hold my social linkd */}
                    <div className='py-5 mx-auto w-full'>
                        <ul className='flex gap-5'>

                            <li><a target='_blank' href="https://github.com/Emranhossainshuvo"><button className='flex border-[#078D84] border-[1px] hover:bg-[#078D84] p-4 rounded-lg items-center gap-1'> <p>Github</p> <FaGithub /></button></a></li>

                            <li>
                                <a target='_blank' href="https://drive.google.com/file/d/1be0KqyAaNZQh7Pg_v00DXuxIVsRDiw70/view?usp=sharing">
                                    <button className='flex border-[#078D84] border-[1px] hover:bg-[#078D84] p-4 rounded-lg items-center gap-1'>
                                        <p>Resume</p>
                                        <RxResume />
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img className="rounded-md" src="https://i.ibb.co/3rhzz4M/IMG-20231209-080753-removebg-4-removebg-preview.png" alt="" />
                </div>
            </div >
        </>
    );
};

export default Banner;