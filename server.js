const express = require('express')
const app = express();
app.use(express.json())



app.listen(3000,()=>{
    console.log('listening on port no 3000')
})

app.get('/home',(req,res)=>{
    res.send("hello world")
})