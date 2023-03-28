import { useParams } from "react-router-dom"
import { useEffect ,useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu=()=>{

    const {resId} =useParams(); // to read dynamic URL parameters
    

    const restaurant= useRestaurantMenu(resId);

    const dispatch=useDispatch();

    //onclick(handleAddItem)=>dispatches action(addItem)=>calls reducer function=>modifies the cart(slice) of store =>takes data from selector =>updates cart

    const addFoodItem=(item)=>{   //dispatches the action and adds items
        dispatch(addItem(item));
    }

    
    const menu =(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    console.log(menu)
    
    
    return (!restaurant)? <Shimmer/>:(
        <div className="restaurant-menu">
            <div className="restaurant-description">
            
            <img className="restaurant-image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
            
            <div className="restaurant-description-details">
            <h1 className="restaurant-name">{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
            <p className="restaurant-cuisine">{restaurant?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
            <p className="restaurant-area">{restaurant?.cards[0]?.card?.card?.info?.locality}</p>
            <i className="fa-sharp fa-solid fa-clock"></i>
            </div>
            
            </div>
            <div >
                <h1>Menu</h1>
            
                <ul> 
                    {menu?.map((item)=>
                    <li className="menu-item"
                    key={item?.card?.info?.id}>{item?.card?.info?.name} 
                    - <button className="menu-add-btn" onClick={()=>addFoodItem(item)}>Add Item</button>
                    </li>)}</ul>
               
            </div>
        </div>
    );
};

export default RestaurantMenu