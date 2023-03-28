import { useState ,useEffect} from "react"
import { menu_url } from "../constants"


const useRestaurantMenu=(resId)=>{
    const [restaurant,setRestaurant] =useState(null)

    useEffect(()=>{
        getRestaurantMenu(); //to get restaurant info
    },[])

    async function getRestaurantMenu(){
        try{
        const data= await fetch(menu_url+ resId)

        const json= await data.json();
        console.log(json);
        setRestaurant(json?.data)
        } catch(error){
            console.log(error)
        }
    };

    return restaurant;  //returns restaurant menu data



}

export default useRestaurantMenu