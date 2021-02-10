import React from 'react'
import BookContainer from '../components/BookContainer';
import Banner from "../components/Banner";
import API from "react-router-dom"

const SavedBooks = () => {

    return (
        <section>
            <Banner />
            <BookContainer />
        </section>
    )
}

export default SavedBooks
