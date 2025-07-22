import { useSelector } from "react-redux";
import { ItemsList } from "./ItemsList";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../../utils/cartSlice";
import {ITEM_IMG_PREFIX, CORS_PROXY} from "../../utils/constants"

const Cart = () => {

    const cartItems = useSelector((store)=>store?.cart?.items)

    const dispatch = useDispatch();


    const handleClearCart = () => {
        dispatch(clearCart())
        
    }
    
      const handleAddItem=(item)=>{
    
        //dispatch(addItem(item))
        console.log("additem")
    
      }

    const handleRemoveItem = () => {
        //dispatch(removeItem())
        console.log("removeitem")
    }
    return (<div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
         <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemsList items={cartItems} />
      </div>
    </div>)
}

export default Cart;