import React from 'react'
import {useLocation} from "react-router-dom";
import API from "../utils/API"


const Book = ({books}) => {
    // const [book, setBook] = useState({
    //     title:"",
    //     subtitle: "",
    //     authors: [],
    //     description: "",
    //     image: "",
    //     link: "",
    //     googleId: ""
    // });
    const location = useLocation();

    const buttonSet = (location) => {  
        if (location === "/savedBooks") {
            return "Delete"
        } else {
            return "Save"
        }
    }
    
    function getAllBooks(location){
        switch(location){
            
        case "/savedBooks":
            getSavedBooks();
            break;
        case "/":
            return  ( books && books.map( book => {
            return(
            <div key={book.id} className="border" style={{padding: "10px 10px"}}>
                <section style={{display:"flex"}}>
                    <section className="col-9">
                        <h4 >{book.volumeInfo.title}</h4>
                        <p >Written By: {book.volumeInfo.authors}</p>
                    </section>
                    <section className="col-3" style={{display:"flex", justifyContent:"flex-end", height:"30%"}}>
                        <button>
                            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
                        </button>
                        <button onClick={() =>{ location.pathname === "/savedBooks"? deleteBook(book.id) : saveBook(book.id) } }>
                            {buttonSet(location.pathname)}
                        </button>
                    </section>
                </section>
                <section>
                    <section style={{display:"flex"}}>
                        < img className = "col-2"
                        src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail: "#"} alt = " Pic of the Book"  /> 
                        <p className="col-10" >
                            {book.volumeInfo.description}
                        </p>
                    </section>
                </section>
            </div>)}
            ));
        case "/search":
            return  ( books && books.map( book => {
            return(
            <div key={book.id} className="border" style={{padding: "10px 10px"}}>
                <section style={{display:"flex"}}>
                    <section className="col-9">
                        <h4 >{book.volumeInfo.title}</h4>
                        <p >Written By: {book.volumeInfo.authors}</p>
                    </section>
                    <section className="col-3" style={{display:"flex", justifyContent:"flex-end", height:"30%"}}>
                        <button>
                            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
                        </button>
                        <button onClick={() =>{ location.pathname === "/savedBooks"? deleteBook(book.id) : saveBook(book.id) } }>
                            {buttonSet(location.pathname)}
                        </button>
                    </section>
                </section>
                <section>
                    <section style={{display:"flex"}}>
                        < img className = "col-2"
                        src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail: "#"} alt = " Pic of the Book"  /> 
                        <p className="col-10" >
                            {book.volumeInfo.description}
                        </p>
                    </section>
                </section>
            </div>)}
            ))
        default:
            break;
    }
}
    function getSavedBooks(){
        API.getDbBooks()
        .then(res => {
            console.log(res.data)
            // res.data.length>1 && res.data.map(book =>{
            // return(
            //     <div key={book.id} className="border" style={{padding: "10px 10px"}}>
            //         <section style={{display:"flex"}}>
            //             <section className="col-9">
            //                 <h4 >{book.volumeInfo.title}</h4>
            //                 <p >Written By: {book.volumeInfo.authors}</p>
            //             </section>
            //             <section className="col-3" style={{display:"flex", justifyContent:"flex-end", height:"30%"}}>
            //                 <button>
            //                     <a href={book.volumeInfo.infoLink} target="_blank" >More Info</a>
            //                 </button>
            //                 <button onClick={() =>{ location.pathname === "/savedBooks"? deleteBook(book.id) : saveBook(book.id) } }>
            //                     {buttonSet(location.pathname)}
            //                 </button>
            //             </section>
            //         </section>
            //         <section>
            //             <section style={{display:"flex"}}>
            //                 < img className = "col-2"
            //                 src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail: "#"} alt = " Pic of the Book"  /> 
            //                 <p className="col-10" >
            //                     {book.volumeInfo.description}
            //                 </p>
            //             </section>
            //         </section>
            //     </div>)
            // })
        })
    }

    function saveBook (id) {
        const bookToSave = books.find(book => book.id === id);
        const payload ={
            title: bookToSave.volumeInfo.title,
            subtitle: bookToSave.volumeInfo.subtitle,
            authors: bookToSave.volumeInfo.authors,
            description: bookToSave.volumeInfo.description,
            image: bookToSave.volumeInfo.imageLinks.thumbnail,
            link: bookToSave.volumeInfo.infoLink,
            googleId: bookToSave.id
        }
        console.log(payload)
        API.saveBook(payload)
        .then(() => {
            console.log("you saved a book")
        })
        .catch(err => console.log(err))
    }

    function deleteBook (id) {

    }

    return (
        <section className="border" style={{padding: "20px 10px"}}>
            { books && books.map( book => {
            return(
            <div key={book.id} className="border" style={{padding: "10px 10px"}}>
                <section style={{display:"flex"}}>
                    <section className="col-9">
                        <h4 >{book.volumeInfo.title}</h4>
                        <p >Written By: {book.volumeInfo.authors}</p>
                    </section>
                    <section className="col-3" style={{display:"flex", justifyContent:"flex-end", height:"30%"}}>
                        <button>
                            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
                        </button>
                        <button onClick={() =>{ location.pathname === "/savedBooks"? deleteBook(book.id) : saveBook(book.id) } }>
                            {buttonSet(location.pathname)}
                        </button>
                    </section>
                </section>
                <section>
                    <section style={{display:"flex"}}>
                        < img className = "col-2"
                        src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail: "#"} alt = " Pic of the Book"  /> 
                        <p className="col-10" >
                            {book.volumeInfo.description}
                        </p>
                    </section>
                </section>
            </div>)}
            )};
            {/* {getAllBooks(location.pathname)} */}
        </section>
    )
}


export default Book
