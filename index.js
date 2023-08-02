const express = require("express")
const app = express()

app.get('/time', (req,res) => {
  let date_ob = new Date() 
  
  // current hours
  let hours = date_ob.getHours();
  // current minutes
  let minutes = date_ob.getMinutes();

  res.send(hours + ":" + minutes)
})

app.listen(3000)
