const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static('publicPath'));

app.set('puerto', process.env.PORT|| 3000);

app.listen(app.get('puerto'), () =>console.log(`Servidor Corrindo ${app.get('puerto')}`));
  
app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get('/registro', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})