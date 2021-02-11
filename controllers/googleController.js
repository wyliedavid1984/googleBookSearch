const db = require("../models");
const axios = require("axios");
const API_KEY = require("../.env")

module.exports={ 
    
    find: function(req, res) {
        const {query: params } = req
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+{params}+"&key="+API_KEY)
        .then(results => {
            console.log(results)
        })
        .catch(err => console.log(err))
    }
}
// https://www.googleapis.com/books/v1/volumes?q=search+terms