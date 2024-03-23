import PropTypes from 'prop-types';

const CategoryCard = ({category}) => {
    const {logo, category_name, availability} = category;

    return (
        <div className="bg-gray-100 mt-8 p-10 rounded-lg">
            <div className="bg-gray-200 inline-block p-4 rounded-lg mb-8">
                <img src={logo} alt="" />
            </div>
            <div>
                <h3 className="text-xl font-extrabold">{category_name}</h3>
                <p className="font-medium text-[#A3A3A3]">{availability}</p>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object.isRequired
}

export default CategoryCard;