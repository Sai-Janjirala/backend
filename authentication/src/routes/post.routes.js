const express = require('express');


const router = express.Router();

router.post('/create', (req, res) => {
  const token = req.cookies.token;

  if(!token){
     return res.status(401).json({
      message: "Unauthorized"
    })
  }
  
  try{
    jwt.verify(token, 'fa3467fa068d1de7196e3e302d4d82a3')
  }
  catch(err){
    return res.status(401).json({
      message: "Token is invalid"
    })
  }
  
})
module.exports = router;