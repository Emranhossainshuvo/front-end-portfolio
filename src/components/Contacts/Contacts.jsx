import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

const Contacts = () => {
    return (
        <>
            {/*section that will hold everything in this page  */}
            <section className="mt-5">
                {/* section to hold the component title */}
                <section>
                    <div className="mb-20 text-center">
                        <div className="w-11/12">
                            <p className="mb-4">Contacts</p>
                            <h3 className="text-3xl font-semibold mb-6">Let&apos;s get connected</h3>
                        </div>
                    </div>
                </section>
                {/* section to hold the links and the image */}
                <section className="flex justify-center items-center">
                    {/* section to hold the social links */}
                    <section>
                        <ul>
                            <li className="flex justify-start items-center">
                                <FaGithub />
                                <span>
                                    Let&apos;s get connected with Github
                                </span>
                            </li>
                            <li className="flex justify-start items-center">
                                <FaTwitter />
                                Stay together at Twitter
                            </li>
                            <li className="flex justify-start items-center">
                                <FaLinkedin />
                                Connect me on Linkedin
                            </li>
                            <li className="flex justify-start items-center">
                                <FaMedium />
                                connect on medium.
                            </li>
                        </ul>
                    </section>
                    {/* section to hold the form */}
                    <section>
                        <form className="grid grid-cols-1 gap-5">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <textarea name="Messege" placeholder="Messege" id="">

                            </textarea>
                        </form>
                    </section>
                </section>
            </section>
        </>
    );
};

export default Contacts;