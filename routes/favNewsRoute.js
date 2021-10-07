const express = require('express')

const routerr = express.Router()

const cors = require('cors')
const bdp = require('body-parser')
let favNewsModel = require('../models/favNewsSchema')

routerr.use(bdp.urlencoded({extended:true}))
routerr.use(bdp.json())




routerr.post('/addFavNews',async(req,res)=>{

    var chk = await favNewsModel.findOne({
        userId:req.body.userId,
        title:req.body.title
    })
    if(chk){
        res.send('It is already in your fav list.')
    }else{
        let favNews = new favNewsModel({
            userId:req.body.userId,
            author:req.body.author,
            title:req.body.title,
            description:req.body.description,
            url:req.body.url,
            urlToImage:req.body.urlToImage,
            publishedAt:req.body.publishedAt,
            content:req.body.content,
        })
        favNews.save()
        .then((response)=>{
            res.send('News Added to fav list')
        }).catch((err)=>{
            res.send('Error')
        })
    }

    
})

routerr.post('/getFavNews',async(req,res)=>{
    var uId = req.body.userId;
    var userFavNews = await favNewsModel.find({
        userId : uId
    })
    res.send(userFavNews)
})

routerr.post('/deleteFavNews',async(req,res)=>{
    var docId = req.body.docId;
    var deleteDoc =  favNewsModel.remove({
        _id:req.body.docId,
    },
    (err)=>{
        if (!err) {
            res.send = 'Remove from fav list';
    }
    else {
            res.send = 'error';
    }
    }
    )
    res.send(deleteDoc)
})

module.exports = routerr