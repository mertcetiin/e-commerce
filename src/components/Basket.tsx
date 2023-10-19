import { Link } from "react-router-dom";
import { useStore } from "../states/store";
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

function Basket() {
    const shopState = useStore((state) => state.basket);

    return (
        <div className="container mx-auto p-4">
            {shopState.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-300">
                    <div className="flex items-center space-x-4">
                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div>
                            <h4 className="text-xl font-semibold">{item.name}</h4>
                            <p className="text-gray-500">{item.description}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="button" className="rounded-full p-2 bg-gray-200">
                            <AiOutlineMinus />
                        </button>
                        <span className="text-lg font-semibold">0</span>
                        <button type="button" className="rounded-full p-2 bg-gray-200">
                            <AiOutlinePlus />
                        </button>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-primary-500">{item.price}</p>
                    </div>
                </div>
            ))}
            <div className="flex justify-between items-center py-4">
                <Link to='/shop' className="text-primary-500 hover:underline">Continue Shopping</Link>
                <div>
                    <p className="text-lg font-semibold">Total Price: 0</p>
                </div>
            </div>
        </div>
    );
}

export default Basket;
