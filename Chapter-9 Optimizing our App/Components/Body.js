import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


// Filter the restaurant data according the search
function filterData(searchText,restaurants){
    const filterData=restaurants.filter((restaurant)=>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;

}

const Body=()=>{

    const [searchText,setSearchText] = useState(""); // to create local state variables
      // returns = [variable name, function to update state]
    const [allRestaurants,setAllRestaurants]=useState([]); 
    const [filteredRestaurants,setFilteredRestaurants]=useState([]); 
    const [errorMessage, setErrorMessage] = useState(""); 

    //useEffect to call getAllRestaurants for one time
    useEffect(()=>{
       getRestaurants();

    },[])

     // async function getRestaurant to fetch Swiggy API data
    async function getRestaurants(){

     // handle the error using try... catch   
        try{
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.366077103395924&lng=78.53137616068125&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json)
        // optional chaining
       setAllRestaurants(json?.data.cards[2]?.data?.data?.cards);
       setFilteredRestaurants(json?.data.cards[2]?.data?.data?.cards);
        }catch(error){
            console.log(error)

        }
        
    }

 const searchData=(searchText,allRestaurants)=>{
    if(searchText != ""){
        const data=filterData(searchText,allRestaurants)
        setFilteredRestaurants(data);
        setErrorMessage('')
        if(data.length===0){
            setErrorMessage("No Restaurants found")
        }
    }else{
        setErrorMessage('')
        setFilteredRestaurants(allRestaurants)
    }

 }   

 const offline =useOnline();

 if(!offline){
    return <h1>offline,Check your internet connection</h1>
 }

// if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

    
    return (
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
                searchData(searchText,allRestaurants);
               
            }}>
                Search
            </button>
       </div>
       {errorMessage && <div>{errorMessage}</div>}
       {allRestaurants?.length==0?(<Shimmer/>):(<div className="res-list"> 
            {filteredRestaurants.map((restaurant) => {
                return(
                    <Link  to={"/restaurant/" +restaurant.data.id} key={restaurant.data.id}><RestaurantCard  {...restaurant.data} /></Link>

                ) 
            })}
       </div>)}
        
       </>
    )
  }


export default Body  