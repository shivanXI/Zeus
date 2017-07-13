var express = require('express')  
var app = express()

app.get('/', function (req, res) {  
  res.send('WhatsUp Dude!!')
})

app.listen(3000, function () {  
  console.log('App is listening where are you port 3000! :P')
})