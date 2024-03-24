import { Link, useLoaderData } from "react-router-dom";
import FeaturedJobCard from "../FeaturedJobCard/FeaturedJobCard";
import { useState } from "react";

const FeaturedJobs = () => {
    const { jobs } = useLoaderData();
    console.log(jobs);
    const [seeAll, setSeeAll] = useState(false);

    const handleSeeAll = () => {
        setSeeAll(true);
    }

    return (
        <div className="max-w-[82.5rem] mx-auto mt-32">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
                <p className="font-medium text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
                {
                    seeAll ? jobs.map(job => <FeaturedJobCard key={job.id} job={job}></FeaturedJobCard>) : jobs.slice(0, 4).map(job => <FeaturedJobCard key={job.id} job={job}></FeaturedJobCard>)
                }
            </div>
            <div className="text-center mt-10">
                <Link><button onClick={handleSeeAll} className={`btn w-auto h-auto py-5 px-7 text-xl rounded-lg font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white ${seeAll && 'hidden'}`}>See All Jobs</button></Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;