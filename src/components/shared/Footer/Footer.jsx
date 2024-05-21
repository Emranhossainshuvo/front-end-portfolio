import moment from 'moment';




const Footer = () => {
    return (
        <>
            {/* section for holding everything in this page */}
            <section>
                <section>
                    <p className='text-center'>&copy; {moment().format('YYYY')} - All rights reserved by Md. Emran Hossain</p>
                </section>
            </section>
        </>
    );
};

export default Footer;