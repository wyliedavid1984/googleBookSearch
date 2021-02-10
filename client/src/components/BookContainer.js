import Book from './Book'
import React, {useLocation} from 'react'

const styles = {
    container:{
        margin: "20px 30px",
        padding: "30px 10px",
        textAlign: "left",
    } 
}

const BookContainer = () => {
    const location = useLocation();
    console.log(location.pathname)
    const findLocation = (location) =>{
        console.log(location)
        if (location === "/search"){
            return "Results"
        }else{
            return "Saved Books"
        }
    }
    
    return (
        <section style={styles.container} className="border">
            <h4>{findLocation(location.pathname)}</h4>
            <section>
                <Book />
                <Book />
            </section>
        </section>
    )
}

export default BookContainer
