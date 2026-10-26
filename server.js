// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const resturaunts =  require("./data")
const dotenv = require('dotenv').config()

console.log(process.env.ZAID_MESSAGE)



app.use(express.static('public')); //all static files are in the public folder




// Routes go here
app.get("/", (req, res)=>{
    res.render("homepage.ejs")
})

app.get("/resturaunts", (req, res)=>{
    res.render("resturaunts/all-resturaunts.ejs", {resturaunts: resturaunts})
})

app.get('/resturaunts/:resturauntsId', (req, res)=>{
    const foundResturaunt = resturaunts.find((oneResturaunt)=>{
        return oneResturaunt.id === Number(req.params.resturauntsId)
    })
    res.render('resturaunts/resturaunt-details.ejs', {resturaunts: foundResturaunt})
})
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000



