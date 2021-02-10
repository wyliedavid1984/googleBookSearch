import React from 'react'
import BookContainer from '../components/BookContainer'
import Banner from "../components/Banner"

const SavedBooks = () => {

    return (
        <section>
            <Banner>
                <h1>(React) Google Books Search</h1>
                <h3>Browse Save Books</h3>
            </Banner>
            <BookContainer />
        </section>
    )
}

export default SavedBooks
