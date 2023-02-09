import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";



function filterData(searchText,restaurants){
    const filterData=restaurants.filter((restaurant)=>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;

}

const Body=()=>{

    const [searchText,setSearchText] = useState(""); // to create local state variables
      // returns = [variable name, function to update state]
    const [restaurants,setRestaurants]=useState(restaurantList);  
    
    return(
       <> 
       <div className="search-container">
       <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food... "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
            <button className="search-btn"
            onClick={()=>{
                const data=filterData(searchText,restaurants);
                setRestaurants(data);
            }}>
                Search
            </button>
       </div>
        <div className="res-list"> 
            {restaurants.map((restaurant) => {
                return(
                    <RestaurantCard key={restaurant.data.id} {...restaurant.data} />

                ) 
            })}
       </div>
       </>
    )
  }


export default Body  