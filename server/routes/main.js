const express= require ('express')
const router=express.Router()

    router.get('/about', (req, res) => {
        res.render('about')})    

        router.get('/content', (req, res) => {
            res.render('content')})  
module.exports=router;