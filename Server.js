const express = require('express');
const app = express();

const user=require('./UserData');

app.set('view engine' , 'ejs');

app.get('/', (req, res)=>{
    res.render("view", user);
})

app.listen(4000, ()=>{
    console.log("HI");
})

