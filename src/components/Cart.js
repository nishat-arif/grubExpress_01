import { useSelector } from "react-redux";
import { ItemsList } from "./ItemsList";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=>store?.cart?.items)

    const dispatch = useDispatch();


    const handleClearCart = () => {
        dispatch(clearCart())
        
    }

    const handleRemoveItem = () => {
        dispatch(removeItem())
    }
    return (<div>
        <h1>Cart</h1>
        <div>
            <button  onClick={handleClearCart} style={{"cursor":"pointer"}}>Clear Cart</button>
        </div>
        {cartItems.length == 0 && <h3>Cart is empty... Add items to your cart!!!</h3>}
        <div>
            <ItemsList items={cartItems}/>
            <button onClick={handleRemoveItem}>Remove Last item</button>
        </div>
    </div>)
}

export default Cart;