import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { useLoaderData, useParams } from 'react-router-dom';
import bgRec from '../assets/images/bg1.png'

const JobDetails = () => {

    const { id } = useParams()
    const idInt = parseInt(id);
    const jobs = useLoaderData();
    const job = jobs.find(job => job.id === idInt)
    const { job_description, job_responsibility, educational_requirements, experience, salary_range, job_title, contact_information } = job;
    const { phone, email, address } = contact_information;

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
                    <h5><span className="font-extrabold text-[#1A1919]">Job Description:</span> {job_description}</h5>
                    <h5><span className="font-extrabold text-[#1A1919]">Job Responsibility:</span>  {job_responsibility}</h5>
                    <h5 className="space-y-4"><p className="font-extrabold text-[#1A1919]">Educational Requirements:</p><p>{educational_requirements}</p></h5>
                    <h5 className="space-y-4"><p className="font-extrabold text-[#1A1919]">Experiences:</p><p>{experience}</p></h5>
                </div>
                <div className="col-span-4">
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <h3 className="text-xl font-extrabold text-[#1A1919] pb-6">Job Details</h3>
                        <hr />
                        <div className="flex items-center gap-2 text-[#757575] font-medium text-xl pt-6 pb-4">
                            <div>
                                <span className="text-2xl text-[#7E90FE]"><HiOutlineCurrencyDollar /></span>
                            </div>
                            <div>
                                <h5><span className="font-extrabold text-[#1A1919]">Salary: </span>{salary_range}</h5>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-[#757575] font-medium text-xl">
                            <div>
                                <span className="text-2xl text-[#7E90FE]"><IoCalendarOutline /></span>
                            </div>
                            <div>
                                <h5><span className="font-extrabold text-[#1A1919]">Job Title: </span>{job_title}</h5>
                            </div>
                        </div>
                        <h3 className="text-xl font-extrabold text-[#1A1919] pt-8 pb-6">Contact Information</h3>
                        <hr />
                        <div className="pt-6 space-y-4">
                            <div className="flex items-center gap-2 text-[#757575] font-medium text-xl">
                                <div>
                                    <span className="text-2xl text-[#7E90FE]"><FiPhone /></span>
                                </div>
                                <div>
                                    <h5><span className="font-extrabold text-[#1A1919]">Phone: </span>{phone}</h5>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-[#757575] font-medium text-xl">
                                <div>
                                    <span className="text-2xl text-[#7E90FE]"><HiOutlineMail /></span>
                                </div>
                                <div>
                                    <h5><span className="font-extrabold text-[#1A1919]">Email: </span>{email}</h5>
                                </div>
                            </div>
                            <div className="flex gap-2 text-[#757575] font-medium text-xl">
                                <div>
                                    <span className="text-2xl text-[#7E90FE]"><SlLocationPin /></span>
                                </div>
                                <div>
                                    <h5><span className="font-extrabold text-[#1A1919]">Address: </span>{address}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn w-full h-auto py-5 px-7 text-xl rounded-lg font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mt-6">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;