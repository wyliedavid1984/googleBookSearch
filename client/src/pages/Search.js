import React, {useState, useRef} from 'react'
import Banner from '../components/Banner'
import BookContainer from '../components/BookContainer'
import API from "../utils/API"

const Search = () => {
    const [books, setBooks] = useState([])
    const [bookSearch, setBookSearch] = useState("");
    const searchRef = useRef();

    const handleInputChange = event => {
        // de-structure 
        const { value } = event.target;
        // Update the appropriate state
        setBookSearch(value);
    };
    // form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        // api to google to get books matching search, limit 10
        API.getBooksFrontEnd(bookSearch)
        .then(res => { 
            setBooks(res.data.items)
        })
        .catch(err => console.log(err));

        searchRef.current.value= "";
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
                      ref={searchRef}
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
            <BookContainer books={books} />        
        </div>
    )
}

export default Search
