import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const FeaturedJobCard = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary_range} = job;

    return (
        <div className="border border-[#E8E8E8] p-10 rounded-lg">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="mt-8 space-y-2 mb-4">
                <h3 className="text-2xl font-extrabold text-[#474747]">{job_title}</h3>
                <p className="font-semibold text-[#757575]">{company_name}</p>
            </div>
            <div className="space-x-4">
                <button className="btn w-auto h-auto border border-[#7E90FE] py-2 px-5 text-[#7E90FE] bg-transparent font-extrabold rounded-md">{remote_or_onsite}</button>
                <button className="btn w-auto h-auto border border-[#7E90FE] py-2 px-5 text-[#7E90FE] bg-transparent font-extrabold rounded-md">{job_type}</button>
            </div>
            <div className="flex items-center gap-6 mt-4">
                <p className="flex items-center gap-2 text-xl font-semibold text-[#757575]"><span className="text-2xl"><SlLocationPin /></span> <span>{location}</span></p>
                <p className="flex items-center gap-2 text-xl font-semibold text-[#757575]"><span className="text-2xl"><HiOutlineCurrencyDollar /></span> <span>{salary_range}</span></p>
            </div>
            <Link to='/details'><button className="btn w-auto h-auto py-3 px-5 text-xl rounded-lg font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white mt-6">View Details</button></Link>
        </div>
    );
};

FeaturedJobCard.propTypes = {
    job: PropTypes.object.isRequired
}

export default FeaturedJobCard;