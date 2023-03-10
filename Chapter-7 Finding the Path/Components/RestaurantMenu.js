import { useParams } from "react-router-dom"
import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{

    const {resId} =useParams(); // to read dynamic URL parameters
    
    const [restaurant,setRestaurant] =useState(null)

    

    useEffect(()=>{
        getRestaurantMenu(); //to get restaurant info
    },[])

    async function getRestaurantMenu(){
        try{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.345853&lng=78.552312&restaurantId=" + resId)

        const json= await data.json();
        console.log(json);
        setRestaurant(json?.data)
        } catch(error){
            console.log(error)
        }
    };

    const menu =(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
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
            <div>
                <h1>Menu</h1>
                <ul> {menu?.map((item)=><li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}</ul>
               
            </div>
        </div>
    );
};

export default RestaurantMenu