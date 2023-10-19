import Footer from "./Footer";
import Header from "./Header";
import { GrFavorite } from 'react-icons/gr';
import { FaShoppingBag } from "react-icons/fa";
import { useStore } from "../states/store";

function Shop() {

    const shopState = useStore((state) => state.shopState)
    const shopLikeClick = useStore((state) => state.shopLikeClick)
    const shopFavorite = useStore((state) => state.shopFavorite)

    const handleBasketClick = useStore((state) => state.handleBasketClick)
    const shopBasket = useStore((state) => state.shopBasket)

    return (
        <div>
            <Header />
            <section className="text-gray-600 body-font bg-gray-200">
                <h1 className="sm:text-3xl text-center -mb-10 text-2xl font-medium title-font text-gray-600">Clothes</h1>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {shopState.map((item) => (
                            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div className="relative group">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.img} />
                                        <div className="overlay absolute bottom-0 left-0 w-full h-12 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                                            <button onClick={() => {
                                                shopLikeClick(item.name, item.price, item.img, item.id);
                                                shopFavorite(item.id, !item.isFavorite);
                                            }} className={`ml-0 cursor-pointer border p-2.5 rounded-full ${item.isFavorite ? 'bg-gray-400' : 'white'} text-${item.isFavorite ? 'white' : 'black'}`}>
                                                <GrFavorite />
                                            </button>
                                            <button onClick={() => {
                                                handleBasketClick(item.name, item.price, item.id)
                                                shopBasket(item.id, !item.isBasket)
                                            }} className={`ml-20 cursor-pointer border p-2.5 rounded-full  ${item.isBasket ? 'bg-gray-400' : 'white'} text-${item.isBasket ? 'white' : 'black'}`}>
                                                <FaShoppingBag />
                                            </button>
                                        </div>
                                    </a>
                                </div>
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.name}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.price}.00</h2>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Shop;