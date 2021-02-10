import axios from "axios";

export default {

    // Gets books from google api
    getBooks: function(search) {
        const userInput = {params: search}
        return axios.get("/api/google" + userInput)
    },
    // Gets all books from db
    getDbBooks: function() {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
    
}

