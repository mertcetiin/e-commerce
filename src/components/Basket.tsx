import { useStore } from "../states/store";


function Basket() {

    const shopState = useStore((state) => state.basket)

    return (
        <div>
            {shopState.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                </div>
            ))}
        </div>
    )
}

export default Basket;