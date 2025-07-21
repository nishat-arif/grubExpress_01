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
    return (<div>
        <h1>Cart</h1>
        <div>
            <button  onClick={handleClearCart} style={{"cursor":"pointer"}}>Clear Cart</button>
        </div>
        {cartItems.length == 0 && <h3>Cart is empty... Add items to your cart!!!</h3>}
       <div className="itemList-container">
             {cartItems.map((item, index) => (
               <div
                 key={item.card.info.id}
               className="item-container">
                 <div >
                   <div className="item-name">
                     <span>{item.card.info.name}</span>
                     <span>
                       - ₹
                       {item.card.info.price
                         ? item.card.info.price / 100
                         : item.card.info.defaultPrice / 100}
                     </span>
                   </div>
                   <p >{item.card.info.description}</p>
                 </div>
                 <div >
                   <div>
                     <button style={{"cursor":"pointer"}}
                     onClick={()=>handleAddItem(item)}>
                       Add +
                     </button>
                     <button style={{"cursor":"pointer"}}
                     onClick={()=>handleRemoveItem(item)}>
                       remove -
                     </button>
                   </div>
                   <img src={ITEM_IMG_PREFIX + item.card.info.imageId} className="img-width"/>
                 </div>
               </div>
             ))}
           </div>
    </div>)
}

export default Cart;