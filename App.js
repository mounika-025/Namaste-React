



 import React from "react"
 import ReactDOM from "react-dom/client"

 //JSX => React.createElement => Object =>HTML(DOM)

 const Heading=()=>(
    <div>
         <h1 id="title" key="h2">Hello</h1> 
        
    </div>

    //Jsx expression
     
 )

 // React Components
 //- Functional component =>New way

 const HeaderComponent=()=>{      //A normal function that returns jsx

    return(
        <div>
        <Heading/>      
        <h2>Functional Component</h2> 
        </div> 

    ) 

 }


 //-Class component=> Old way





 const root=ReactDOM.createRoot(document.getElementById("root"))

// async defer
 root.render(<HeaderComponent/>)
 
 
 