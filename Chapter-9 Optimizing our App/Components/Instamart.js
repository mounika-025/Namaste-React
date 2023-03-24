import { useState } from "react"

const Section=({title,description})=>{

    const [isVisible,setIsVisible] =useState(false)

    return(

        <div>
            <h2>{title}</h2>
            {isVisible ? 
             (<button onClick={()=>setIsVisible(true)}>Hide</button> ):(<button onClick={()=>setIsVisible(false)} >Show</button> )}
            {isVisible && <p>{description}</p>}
            
            

        </div>
    )

}

const Instamart=()=>{
    return(
        <div>
            <h1>Instamart hello</h1>
            <h2>Hello</h2>
            <Section
            title={"About Instamart"}
            description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
            />
            <Section
            title={"About Instamart"}
            description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
            />
        </div>
    )
}

export default Instamart