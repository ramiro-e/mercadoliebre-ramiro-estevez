const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("Mercadoliebre corrindo en el puerto 3000");
});

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/registro', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})