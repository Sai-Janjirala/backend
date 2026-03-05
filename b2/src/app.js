// sever ko create krna

const express = require('express')

const app = express ()



// note = {
//   title : " my first note",
//   description : " this is my 1st note"
// }

const notes = [
  {
    title : " my first note",
  description : " this is my 1st note"
  },{
    title : " my second note",
  description : " this is my 2nd note"
  }
]

app.post('/notes',(req,res)=>{
  
})

module.exports = app