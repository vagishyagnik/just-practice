const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(3434,()=>{
    console.log('Aisi ki taisi');
})