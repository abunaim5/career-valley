import bgRec from '../assets/images/bg1.png'

const JobDetails = () => {
    return (
        <div className="">
            <div className="bg-gray-100 pt-24 pb-36 relative">
                <h2 className="text-center text-3xl font-extrabold text-[#1A1919]">Job Details</h2>
                <div className="absolute bottom-0 left-0">
                    <img src={bgRec} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-32 max-w-[82.5rem] mx-auto">
                <div className="font-medium text-[#757575] col-span-8 space-y-6">
                    <h5><span className="font-extrabold text-[#1A1919]">Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h5>
                    <h5><span className="font-extrabold text-[#1A1919]">Job Responsibility:</span>  Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</h5>
                    <h5 className="space-y-4"><p className="font-extrabold text-[#1A1919]">Educational Requirements:</p><p>Bachelor degree to complete any reputational university.</p></h5>
                    <h5 className="space-y-4"><p className="font-extrabold text-[#1A1919]">Experiences:</p><p>2-3 Years in this field.</p></h5>
                </div>
                <div className="col-span-4">
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <h3 className="text-xl font-extrabold text-[#1A1919] pb-6">Job Details</h3>
                        <hr />
                        <h5 className="pt-6 pb-4"><span>icon</span> <span className="font-extrabold text-[#1A1919]">Salary: </span>100K - 150K (Per Month)</h5>
                        <h5><span>icon</span> <span className="font-extrabold text-[#1A1919]">Job Title: </span>Product Designer</h5>
                        <h3 className="text-xl font-extrabold text-[#1A1919] pt-8 pb-6">Contact Information</h3>
                        <hr />
                        <div className="pt-6 space-y-4">
                            <h5><span>icon</span><span className="font-extrabold text-[#1A1919]">Phone: </span>0122554887</h5>
                            <h5><span>icon</span><span className="font-extrabold text-[#1A1919]">Email: </span> info@gmail.com</h5>
                            <h5><span>icon</span><span className="font-extrabold text-[#1A1919]">Address: </span> Dhanmondi 32, Sukrabad
                                Dhaka, Bangladesh</h5>
                        </div>
                    </div>
                    <button className="btn w-full h-auto py-5 px-7 text-xl rounded-lg font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mt-6">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;