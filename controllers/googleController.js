const db = require("../models");
const axios = require("axios");

module.exports={ 
    
    find: function(req, res) {
        const {query: params } = req
        axios.get("https://www.googleapis.com/books/v1/volumes", {params})
        .then(results => {
            console.log(results)
        })
        .catch(err => console.log(err))
    }
}