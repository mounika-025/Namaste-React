import { Link } from "react-router-dom"
import { useContext } from "react"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext"

const Heading=()=>(
  <a href="/">
        <h1 className="heading" id="title" key="h2">Good Meal</h1> 
   </a>    
);


const Header=()=>{ 

  const isOnline=useOnline();
  
  const {user}=useContext(UserContext);

  return(
      <div className="header">
      <Heading/> 
      <div className="nav-items">
       <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/"><li>Contact</li></Link>
          <Link to="/"><li>Cart</li></Link>
          <Link to="/instamart"><li>Instamart</li></Link>
       </ul>
       </div> 
       <h1>{isOnline? "online" : "offline"}</h1>  
        {user.name}  
       
      </div> 

  ) 

}

export default Header