import { useLoaderData } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";

const JobCategory = () => {
    const {categories} = useLoaderData();
    
    console.log(categories)

    return (
        <div className="max-w-[82.5rem] mx-auto mt-32">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-extrabold">Job Category List</h2>
                <p className="font-medium text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {
                    categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default JobCategory;