
const path = require('path');
//const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's
const express = require('express');
const { read } = require('fs');
const mongoClient = require("./config/database")

const app = express();


const router = require("./routes/main.route")//phan chia luong
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))// To parse incoming JSON in POST request body:
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

router(app)//tao cac luong thuc thi
//login site

// chay server
const port = app.get('port') || 3000
app.listen(port, () => console.log(`Server is listening on port ${port}`))