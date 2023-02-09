

import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Chapter-5 Let's Get Hooked!/Components/Header";
import Footer from "./Chapter-5 Let's Get Hooked!/Components/Footer";
import Body from "./Chapter-5 Let's Get Hooked!/Components/Body";


const AppLayout=()=>{
  return(
     <>
     <Header/>
     <Body/>
     <Footer/>
     </> //React.Fragment =>empty tag
  )
}



const root=ReactDOM.createRoot(document.getElementById("root"))


root.render(<AppLayout/>)


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
      


