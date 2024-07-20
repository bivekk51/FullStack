
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">Book Listing App</div>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                    <Link to="/add" className="text-white hover:text-gray-400">Add Book</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
