const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const port = (process.env.PORT);
const path = require('path')

const staticPath = path.join(__dirname, "./views/")
console.log(staticPath)

app.use(express.urlencoded({ extended: false }))
app.use(express.static(staticPath))

const connectDB = require('./config/db')
connectDB()

app.set('view engine', 'ejs');

app.use('/', require('./routes/urlRoutes'))

app.listen(port, () => {
    console.log(`Listening On Port ${port}...`);
});