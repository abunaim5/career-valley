import userImg from '../assets/images/user.png';

const Banner = () => {
    return (
        <div className='bg-gray-100 pt-10'>
            <div className='flex gap-16 items-center justify-center max-w-[82.5rem] mx-auto'>
                <div className=''>
                    <h1 className="text-7xl font-extrabold mb-6 w-[570px]">One Step Closer To Your <br /> <span className='text-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Dream Job</span></h1>
                    <p className="text-lg font-medium w-[520px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn w-auto h-auto py-5 px-7 text-xl rounded-lg font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mt-8">Get Started</button>
                </div>
                <div>
                    <img src={userImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;