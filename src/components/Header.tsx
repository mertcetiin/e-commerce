import { FaShoppingBag } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useStore } from '../states/store';

function Header() {

    const isLikeCounter = useStore((state) => state.isLikeCounter)
    const isBasketCounter = useStore((state) => state.isBasketCounter)

    return (
        <header className="text-gray-600 body-font bg-gray-200">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                <div className="hover:text-gray-900 font-medium text-3xl font-elephant">
                    <Link to='/'>e-Shopp</Link>
                </div>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                </nav>
                <div className="mr-4 uppercase font-medium hover:text-gray-900">
                    <Link to='/'>Home</Link>
                </div>
                <div className="mr-16 uppercase font-medium hover:text-gray-900">
                    <Link to='/shop'>Shop</Link>
                </div>
                <div>
                    <button className="mr-5 top-1 uppercase font-medium relative text-xl">
                        <Link to='/favorite'><GrFavorite /></Link>
                        <span className="absolute -top-4 -right-4 bg-gray-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">{isLikeCounter}</span>
                    </button>
                </div>
                <div>
                    <button className="mr-5 top-1 uppercase font-medium relative text-xl">
                        <Link to='/basket'> <FaShoppingBag /></Link>
                        <span className="absolute -top-4 -right-4 bg-gray-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">{isBasketCounter}</span>
                    </button>
                </div>
                <button className="mr-5 uppercase font-medium text-2xl">
                    <Link to='/login'><BsFillPersonFill /></Link>
                </button>
            </div>
        </header>
    )
}

export default Header;