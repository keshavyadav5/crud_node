const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const student = require('./routes/studentRoutes')

app.get('/', (req,res)=>{
  res.send('Hello World')
})

app.use('/student',student)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})