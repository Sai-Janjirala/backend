const express = require('express');

const app  = express() // server instance create kar rhe he


app.get("/",(req,res)=>{
  res.send("hello world")
})

app.get("/about",(req,res)=>{
  res.send("ab Page")
})

app.listen(3000) // server ko start krne ke liye 

// GET => server se data fetch karwana ho tab use krte he 
// POST => server par data send krna ho
// PATCH => sever pr data already hai aur us data ko update krna ho tb use krten hai
//DELETE => server pr data hai aur use delete krna he