import { Link, NavLink } from "react-router-dom";
const Header = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/applied'>Applied Jobs</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
    </>

    return (
        <div className="bg-gray-100 pt-14">
            <nav className="navbar px-0 max-w-[82.5rem] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'><button className="text-4xl font-extrabold"><span className="text-[#7E90FE]">Career</span>Valley</button></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn w-auto h-auto py-5 px-7 text-xl rounded-lg font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Start Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;