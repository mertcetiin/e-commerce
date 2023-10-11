import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
import { ShopProduct } from "./Products";
import { GrFavorite } from 'react-icons/gr';
import { FaShoppingBag } from "react-icons/fa";

function Shop({ isLikeCounter }: { isLikeCounter: number }) {

    const [shopProducts] = useState(ShopProduct);

    return (
        <div>
            <Header isLikeCounter={isLikeCounter} />
            <section className="text-gray-600 body-font bg-gray-200">
                <h1 className="sm:text-3xl text-center -mb-10 text-2xl font-medium title-font text-gray-600">Clothes</h1>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {shopProducts.map((item) => (
                            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div className="relative group">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.img} />
                                        <div className="overlay absolute bottom-0 left-0 w-full h-12 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                                            <button className="ml-0 cursor-pointer border p-2.5 rounded-full">
                                                <GrFavorite />
                                            </button>
                                            <button className="ml-20 cursor-pointer border p-2.5 rounded-full">
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