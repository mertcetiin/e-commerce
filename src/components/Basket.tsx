import { Link } from "react-router-dom";
import { useStore } from "../states/store";
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

function Basket() {

    const shopState = useStore((state) => state.basket);
    const isPriceCounter = useStore((state) => state.isPriceCounter);
    const quantity = useStore((state) => state.quantity);
    const increase = useStore((state) => state.increase);
    const decrease = useStore((state) => state.decrease);

    return (
        <div className="container mx-auto p-4">
            {shopState.length > 0 ? shopState.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-300">
                    <div className="flex items-center space-x-4">
                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div>
                            <h4 className="text-xl font-semibold">{item.name}</h4>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="button" onClick={() => decrease(item.id, item.price)} className="rounded-full p-2 bg-gray-200">
                            <AiOutlineMinus />
                        </button>
                        <span className="text-lg font-semibold">{quantity[item.id]}</span>
                        <button type="button" onClick={() => increase(item.id, item.price)} className="rounded-full p-2 bg-gray-200">
                            <AiOutlinePlus />
                        </button>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-primary-500">${item.price}.00</p>
                    </div>
                </div>
            )) :
                <div className="w-full text-center mt-48 p-4">
                    <h3 className="text-3xl text-gray-600 font-medium mb-4">You have no items in your basket!</h3>
                    <Link to='/shop' className="text-white bg-gray-500 hover:bg-gray-800 rounded-full py-2 px-6 text-lg font-medium transition duration-300">
                        Continue Shopping
                    </Link>
                </div>
            }
            {shopState.length > 0 ? <div className="flex justify-between items-center py-4">
                <Link to='/shop' className="text-primary-500 hover:underline">Continue Shopping</Link>
                <p className="text-lg font-semibold">Total Price: ${isPriceCounter.toFixed(2)}</p>
            </div> : ''}
        </div>
    );
}

export default Basket;
