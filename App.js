const heading=React.createElement(
    "h1",
    {id:"heading"},
    "Namaste React Live"

)


/*
React.createElement has 3 arguments:React.createElement("type",{props},"children")
*/

const paragraph =React.createElement(
    "p",
    {id:"paragraph"},
    "This course is by Akshay"

)
 const container=React.createElement(
    "div",
    {id:"container"},
    [heading,paragraph]

)

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(container)


