import Book from './Book'
import React from 'react'
import {useLocation} from "react-router-dom"
const styles = {
    container:{
        margin: "20px 30px",
        padding: "30px 10px",
        textAlign: "left",
    } 
}

const BookContainer = ({books}) => {
    console.log(books)
    const location = useLocation();

    
    const findLocation = (location) =>{
        if (location === "/search" || location === "/"){
            return "Results"
        }else{
            return "Saved Books"
        }
    }
    
    return (
        <section style={styles.container} className="border">
            <h4>{findLocation(location.pathname)}</h4>
            <section>
                <Book books={books} />
            </section>
        </section>
    )
}

export default BookContainer
