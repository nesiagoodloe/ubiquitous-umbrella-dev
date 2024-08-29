const express = require('express')
const app = express()


console.log('im on a node Server, yo');

app.get('/', function (req, res){
//res.send('Hello Node from local Devbox')
res.sendFile('index.html');

})
app.listen(3000);

