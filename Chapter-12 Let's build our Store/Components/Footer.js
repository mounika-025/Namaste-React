import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Footer=()=>{
  const {user}=useContext(UserContext)
  return(
     <h3>This website is developed by {user.name}</h3>
  )
}

export default Footer  