import React from 'react'

const Book = ({books}) => {
    console.log({books})
    return (
        <section className="border" style={{padding: "20px 10px"}}>
        { books && books.map( book => {
            return(
            <div value={book.id} className="border" style={{padding: "10px 10px"}}>
                <section style={{display:"flex"}}>
                    <section className="col-9">
                        <h4>{book.volumeInfo.title}</h4>
                        <p>Written By: {book.volumeInfo.authors}</p>
                    </section>
                    <section className="col-3" style={{display:"flex", justifyContent:"flex-end", height:"30%"}}>
                        <button><a href={book.volumeInfo.infoLink} target="_blank">More Info</a></button>
                        <button>Save</button>
                    </section>
                </section>
                <section>
                    <section style={{display:"flex"}}>
                        < img className = "col-2"
                        src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail: "#"} alt = " Pic of the Book" /> 
                        <p className="col-10">
                            {book.volumeInfo.description}
                        </p>
                    </section>
                </section>
            </div>)})}
        </section>
    )
}

export default Book
