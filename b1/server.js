const express = require('express');

const app  = express() // server instance sreate kar rhe he


app.get("/",(req,res)=>{
  res.send("hello world")
})

app.get("/about",(req,res)=>{
  res.send("ab Page")
})

app.listen(3000)