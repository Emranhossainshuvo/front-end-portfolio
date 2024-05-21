import moment from 'moment';




const Footer = () => {
    return (
        <>
            {/* div for holding everything in this page */}
            <div>
                <div>
                    <p className='text-center'>&copy; {moment().format('YYYY')} - All rights reserved by Md. Emran Hossain</p>
                </div>
            </div>
        </>
    );
};

export default Footer;