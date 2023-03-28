import { createContext } from "react";

const UserContext=createContext({user:{
    name:"dummy",
    eamil:"dummy123@gmail.com",
}});

UserContext.displayName="UserContext"

export default UserContext;