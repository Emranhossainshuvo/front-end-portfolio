import './banner.css'

const Banner = () => {
    return (
        <>
            {/* div for hold everything in this page */}
            <div className="w-full md:flex justify-between items-center h-[80vh]">
                {/* extra two section for hold two section texts and picture  */}

                <section>
                    {/* texts about me */}
                    <p className="text-lg font-medium">Hello there, and welcome to my place</p>
                    <h2>I&apos;m Emran Hossain</h2>
                    <h2>A full stact developer</h2>
                    {/* section to hold my social linkd */}
                    <section>
                    </section>
                </section>
                <section className="rounded-xl bg-gradient-to-r from-[#2E2E2E] via-[#444444] to-[#919191]">
                    <img className="w-96 px-4 rounded-md" src="https://i.ibb.co/3rhzz4M/IMG-20231209-080753-removebg-4-removebg-preview.png" alt="" />
                </section>
            </div>
        </>
    );
};

export default Banner;