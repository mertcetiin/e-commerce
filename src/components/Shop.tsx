import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
import { ShopProduct } from "./Products";

function Shop() {

    const [shopProducts, setShopProducts] = useState(ShopProduct);

    return (
        <div>
            <Header />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {shopProducts.map((item) => (
                            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.img} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.info}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                                    <p className="mt-1">{item.price}.00</p>

                                </div>
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