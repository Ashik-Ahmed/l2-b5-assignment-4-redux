import { Link } from 'react-router';
import logo from '../../../../assets/bookNestLogo.png'

const Navbar = () => {
    return (
        <nav className="w-full bg-white bg-opacity-95 shadow-md px-10 py-5  sticky top-0 z-5 border-b border-gray-200">
            <Link to="/" className='flex items-center justify-between cursor-pointer'>
                <div className="flex items-center gap-4">
                    <img src={logo} alt="Library Logo" className="w-12 h-12" />
                    <span className="text-3xl font-extrabold text-[#6b4f1d] tracking-wide font-serif">BookNest</span>
                </div>
                <ul className="flex gap-10 text-lg font-semibold">
                    <li>
                        <Link to="/books" className="text-[#6b4f1d] hover:text-[#a67c52] transition-colors">All Books</Link>
                    </li>
                    <li>
                        <Link to="/borrow" className="text-[#6b4f1d] hover:text-[#a67c52] transition-colors">Borrow Summary</Link>
                    </li>
                </ul>
            </Link>
        </nav>
    );
};

export default Navbar;