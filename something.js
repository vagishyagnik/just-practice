const express = require('express')
const app = express()

// You need to practice more and harder!!

app.get('/',(req,res)=>{
    var a = 'Hello';
    var b = 'World';
    res.send(a+b)
})

app.listen(4561,()=>{
    console.log('Aisi ki taisi ho gayi ho gayi');
})
