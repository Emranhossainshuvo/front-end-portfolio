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
                <section className="flex justify-center gap-5 items-center">
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
                        <form className="grid bg-[#2C2F34] p-5 grid-cols-1 gap-5">
                            <p>Name</p>
                            <input type="text" placeholder="Name" />
                            <p>Email</p>
                            <input type="email" placeholder="Email" />
                            <p>Your messege</p>
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