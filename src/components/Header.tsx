import { FaShoppingBag } from 'react-icons/fa';

function Header() {
    return (
        <header className="text-gray-600 body-font bg-gray-400">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                <div className="hover:text-gray-900 font-medium text-3xl font-elephant">
                    Shopp
                </div>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                </nav>
                <div className="mr-5 uppercase font-medium">
                    Home
                </div>
                <div className="mr-5 uppercase font-medium">
                    Shop
                </div>
                <button className="mr-5 uppercase font-medium">Login</button>
                <button className="mr-5 uppercase font-medium">Fav</button>
                <button className="mr-5 uppercase font-medium"> <FaShoppingBag /> </button>
                <div className="mr-5 uppercase font-medium">Contact Us</div>
            </div>
        </header>
    )
}

export default Header