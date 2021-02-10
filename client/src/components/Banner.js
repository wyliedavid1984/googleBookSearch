import React from 'react'
import {useLocation} from "react-router-dom"

const Banner = () => {

    const location = useLocation();
    
    const findLocation = (location) => {
        
        if (location === "/search" || location === "/") {
            return (
                "Search for and Save Books of Interest")
        } else {
            return "Browse Save Books"
        }
    }

    return (
        <section style={{ width: "90%", height: 250, clear: "both", paddingTop: 50, textAlign: "center", margin:" 0px auto"}}
        className="jumbotron border border-success">
                <h1>(React) Google Books Search</h1>
                <h3>{findLocation(location.pathname)}</h3>
        </section>
    )
}

export default Banner
