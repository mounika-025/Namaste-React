

import React ,{lazy,Suspense, useState}from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import Shimmer from "./Components/Shimmer";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

//Chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading
//dynamic import

const Instamart=lazy(()=> import("./Components/Instamart"));
//Upon on demand loading ->upon render ->suspends loading =so we use suspense

const AppLayout=()=>{

  const [user,setUser]=useState({
    name:"Nani",
    email:"nani123@gmail.com"
  });

  return(
     <UserContext.Provider //to override the default value
     value={{
      user:user,
      setUser:setUser,
    }}
     >
     <Header/>
     <Outlet />  
     <Footer/>
     </UserContext.Provider> //React.Fragment =>empty tag
  )
}

//createBrowserRouter for routing different pages 
const appRouter=createBrowserRouter([{

  path: "/", // path for routing
  element:<AppLayout/>, //component for particular path
  errorElement:<Error/>, 
  children:[
    {
      path:"/",
      element:<Body/>, //when the path is / the outlet will be filled by Body component
      
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/contact",
      element:<About/>,
    },
    {
      path:"/cart",
      element:<About/>,
    },
    {
      path:"/restaurant/:resId",
      element:<RestaurantMenu/>,
    },
    {
      path:"/instamart",
      element:<Suspense fallback={<Shimmer/>}> 
        <Instamart/>
        </Suspense>,
    },
  ]
}])


const root=ReactDOM.createRoot(document.getElementById("root"))


root.render(<RouterProvider router={appRouter}/> )


/* our app layout
           1) Header
               - Logo
               - Nav Items(right side)
               - Cart
           2) Body
               - Search bar
               - Restaurants List
                   - Restaurant card
                       - Image
                       - Name
                       - Rating
           3) Footer
               - Links
               - Copyrights
 */              
      


