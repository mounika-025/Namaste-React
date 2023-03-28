import FoodItem from "./FoodItem";

import { useSelector } from "react-redux";



const Cart=()=>{

    const cartItems=useSelector(store =>store.cart.items) //subscribing to specific portion of slice => items
    console.log(cartItems)
    return <div>
        <h1 className="restaurant-name">Cart {cartItems.length} items</h1>
        <FoodItem {...cartItems[0]}/>
    </div>
}

export default Cart;