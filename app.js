
const path = require('path');
//const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's
const express = require('express');
const { read } = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//login site
app.get('/login',(req,res)=>{
    
    res.render('\login')
})

app.get('/Forgot-password',(req, res)=>{
    res.render('\Forgot-password')
})

app.post('/login', (req, res)=>{
    console.log(req.body)
    res.redirect('\Forgot-password')
})

// Start the server
const port = app.get('port') || 3000
app.listen(port, () => console.log(`Server is listening on port ${port}`))