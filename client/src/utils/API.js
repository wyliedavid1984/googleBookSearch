import axios from "axios";

export default {

    // Gets books from google api
    // getBooks: function(search) {
    //     return axios.get("/api/google/", {params: { search: search}})
    // },
    getBooksFrontEnd: function(search){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    },
    // Gets all books from db
    getDbBooks: function() {
        return axios.get("/api/books/");
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database favorite
    saveBook: function(bookData) {
        return axios.post("/api/books/", bookData);
    }
    
}

