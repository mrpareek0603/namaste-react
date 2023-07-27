import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    handleClearCart = () => {
        dispatch(clearCart());
    }
    console.log(cartItems);
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart Page</h1>
            <div className="w-9/12  m-auto">
                <button className="m-4 p-2 text-white bg-red-500 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length===0 && <h1>No item in cart!</h1>}
                <ItemList items={cartItems} isCart={true}/>
            </div>
        </div>)
}
export default Cart;