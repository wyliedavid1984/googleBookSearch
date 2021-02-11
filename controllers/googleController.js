const db = require("../models");
const axios = require("axios");
const API_KEY = require("../.env")

module.exports={ 
    
    find: function(req, res) {
        const {query: params } = req
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+params+"&key="+API_KEY)
        .then(results => {
           results.data.items.filter(
               result =>
               result.volumeInfo.title&&
               result.volumeInfo.infoLink&&
               result.volumeInfo.authors&&
               result.volumeInfo.description&&
               result.volumeInfo.imageLinks.thumbnail
           )
        })
        .then(apiBooks =>{
            db.Book.find().then(dbBooks =>
            apiBooks.filter(apiBook => {
                dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
            }))
            
        })
        .then(books => res.json(books))
        .catch(err => console.log(err))
    }
}
// https://www.googleapis.com/books/v1/volumes?q=search+terms