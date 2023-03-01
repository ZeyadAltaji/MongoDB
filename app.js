const express =require('express');

// init app&middleware
const app =express();

app.listen(3000,()=>{
    console.log("weclome Zeyad altaji and a Port is a 3000");
});

// routing

app.get("/HomePage",(req,res)=>{
    res.json({massage:"welecome to home page !!! "});
});