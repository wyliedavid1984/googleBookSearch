import React from 'react'
import BookContainer from '../components/BookContainer';
import Banner from "../components/Banner";
import API from "../utils/API"

const SavedBooks = () => {

    return (
        <section>
            <Banner />
            <BookContainer />
        </section>
    )
}

export default SavedBooks
