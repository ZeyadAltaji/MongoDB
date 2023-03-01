const express =require('express');
const {connectToDb,getDb}=require('./DBcontion');
// init app&middleware
const app =express();
//db conntion
connectToDb((err)=>{
    if(!err){
        app.listen(3000,()=>{
            console.log("weclome Zeyad altaji and a Port is a 3000");
        })
        db=getDb();
    }
}) 


// routing

app.get("/employees",(req,res)=>{
    let emp =[]
    db.collection('employees')
    .find()
    .sort({name:"zeyad"})
    .forEach(phone =>employees.push(phone))
    .then(()=>{
        res.status(200).json(employees)
    })
    .catch(()=>{
        res.status(500).json({error:"not fonud"})

    })
    // res.json({massage:"welecome to home page !!! "});
})

    
    