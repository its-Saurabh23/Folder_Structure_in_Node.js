const express = require('express');
const UserRouter = require('./routes/route')

const app  = express();

const PORT = process.env.PORT || 5700;


// Bad Architecture

// app.get("/",(req,res)=>{
//     res.send("Hello express");
// })

app.get(('/'),UserRouter);

app.listen(PORT,()=>{

    try {
        console.log(`Server is runing on ${PORT}`);
    } catch (error) {
        console.log(error);
    }
    
})