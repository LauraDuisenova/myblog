require('dotenv').config()

const express = require('express')
const expressLayout= require('express-ejs-layouts')

const app = express()
const PORT = 3000 || process.env.PORT

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(expressLayout)
app.set('layout', './layouts/main') 
app.set('view engine', 'ejs')
const posts = []
app.get('/info', (req, res) => {
    res.render('contents-inform',  {blogPosts:posts})
  })
app.post('/add', function (req, res) {
    const {title, content} = req.body
    const newobj = {
        title:title,
        content:content
    }
    posts.push(newobj)
    res.render('contents-inform', {blogPosts:posts})
})
app.get('/', (req, res) => {
  res.render('index', {blogPosts:posts})
})
app.use('/', require('./server/routes/main'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
