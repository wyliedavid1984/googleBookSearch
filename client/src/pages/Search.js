import React, {useState, useEffect} from 'react'
import Banner from '../components/Banner'
import BookContainer from '../components/BookContainer'
import API from "../utils/API"

const Search = () => {
    const [books, setBooks] = useState([{}])
    const [bookSearch, setBookSearch] = useState("");

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
        .then(res => 
            setBooks(res.data)
        )
        .catch(err => console.log(err));
    };

     const handleInputChange = event => {
         // Destructure the name and value properties off of event.target
         // Update the appropriate state
         const {
             value
         } = event.target;
         setBookSearch(value);
     };

    function handleFormSubmit(event) {
        event.preventDefault();
    
        API.getBooks(bookSearch)
        .then(res => { 
            console.log(res.data)
            setBooks(res.data)
        })
        .catch(err => console.log(err));
    };

    return (
        <div>
            <Banner />
            <div>
                <form>
                    <label>Search:</label>
                    <input
                      name="BookSearch"
                      value={bookSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Book"
                    />
                    <button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg">
                        Search
                    </button>
                </form>
            </div>
            <BookContainer />        
        </div>
    )
}

export default Search
