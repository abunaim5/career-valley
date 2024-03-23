const FeaturedJobs = () => {
    return (
        <div className="max-w-[82.5rem] mx-auto mt-32">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
                <p className="font-medium text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="bg-gray-100 mt-8 p-10 rounded-lg">
                <div>
                    <img src="" alt="" />
                </div>
                <div className="mt-8 space-y-2 mb-4">
                    <h3 className="text-2xl font-extrabold text-[#474747]">Account & Finance</h3>
                    <p className="font-semibold text-[#757575]">300 Jobs Available</p>
                </div>
                <div className="space-x-4">
                    <button className="btn w-auto h-auto border border-[#7E90FE] py-2 px-5 text-[#7E90FE] font-extrabold rounded-md">Remote</button>
                    <button className="btn w-auto h-auto border border-[#7E90FE] py-2 px-5 text-[#7E90FE] font-extrabold rounded-md">Full Time</button>
                </div>
                <div className="flex items-center gap-6 mt-4">
                    <p className="text-xl font-semibold text-[#757575]"><span>icon</span> <span>Dhaka, Bangladesh</span></p>
                    <p className="text-xl font-semibold text-[#757575]"><span>icon</span> <span>Dhaka, Bangladesh</span></p>
                </div>
                <button className="btn w-auto h-auto py-3 px-5 text-xl rounded-lg font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mt-6">View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;