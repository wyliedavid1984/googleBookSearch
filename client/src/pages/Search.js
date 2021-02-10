import React from 'react'
import Banner from '../components/Banner'
import BookContainer from '../components/BookContainer'
import SearchBar from "../components/SearchBar"

const Search = () => {
      
    return (
        <div>
            <Banner>
                <section><h1>(React) Google Books Search</h1></section>
                <section><h3>Search for and Save Books of Interest</h3></section>
            </Banner>
            <SearchBar />
            <BookContainer />
        </div>
    )
}

export default Search
