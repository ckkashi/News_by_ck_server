const mongoose = require('mongoose')

var newsSchemaa = mongoose.Schema({
    
        userId:  {type:String},
        author:  {type:String},
        title:  {type:String},
        description:  {type:String},
        url: {type:String},
        urlToImage:  {type:String},
        publishedAt:  {type:String},
        content: {type:String}
    
})

var favNewsModel = mongoose.model('/favNewsByUsers',newsSchemaa)

module.exports = favNewsModel