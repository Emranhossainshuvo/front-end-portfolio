import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

const Contacts = () => {
    return (
        <>
            {/* section that will hold everything in this page */}

            <section className="mt-5">

                {/* this section if for the title of the section */}
                <section>
                    <div className="mb-20 text-center">
                        <div className="w-11/12">
                            <p className="mb-4 text-3l">Contact me</p>

                            <p className="text-4xl font-semibold">Get in touch or start a project with me.</p>
                        </div>
                    </div>
                </section>

                {/* this section will hold the first part of the component links and image */}
                <section className="md:flex md:justify-center md:gap-10 md:items-center">
                    {/* social links and title  */}
                    <section>
                        <ul>
                            <li className="flex justify-start items-center">
                                <FaGithub />
                                <span>Let&apos;s get connected with Github</span>
                            </li>
                            <li className="flex justify-start items-center">
                                <FaTwitter />
                                <span>follow me on Twitter</span>
                            </li>
                            <li className="flex justify-center items-center">
                                <FaLinkedin />
                                <span> Connect with me on Linkedin</span>
                            </li>
                            <li className="flex justify-center items-center">
                                <FaMedium />
                                <span>Stay connect on Medium</span>
                            </li>
                        </ul>
                    </section>
                    {/* image for the contact component */}
                    <section className="md:w-1/2">
                        <img src="https://i.postimg.cc/8z3fYfgc/121369.jpg" alt="" />
                    </section>
                </section>
                {/* this section will hold the form  */}
                <section>

                </section>
            </section>
        </>
    );
};

export default Contacts;