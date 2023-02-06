/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */




import React from "react"
import ReactDOM from "react-dom/client"

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


