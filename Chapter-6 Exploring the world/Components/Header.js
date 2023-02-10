
const Heading=()=>(
    <a href="/">
          <h1 className="heading" id="title" key="h2">Good Meal</h1> 
     </a>    
  )


const Header=()=>{      

    return(
        <div className="header">
        <Heading/> 
        <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
         </ul>
         </div>     
         
        </div> 

    ) 

 }

 export default Header