

const FoodItem =({name,description,price})=>{
 console.log(name)


    return(
       <div className="card">
       {/* <img
         src={
           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
           cloudinaryImageId
         }
       /> */}
       <h2>{name}</h2>
       <h4>{description}</h4>
       <h4>Rupees: {price}</h4>
      
     </div>
    )
  }
  
  export default FoodItem;