const express =require('express');
const { ObjectId } = require('mongodb');
const DBcontion = require('./DBcontion');
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

app.get('/employees',(req,res)=>{
    let employees =[]
    db.collection('employees')
    .find()
    .sort({name:1})
    .forEach(phone =>employees.push(phone))
    .then(()=>{
        res.status(200).json(employees)
    })
    .catch(()=>{
        res.status(500).json({error:"not fonud"})

    })
    // res.json({massage:"welecome to home page !!! "});
})
app.get('/employees/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        db.collection('employees')
        .findOne({_id: ObjectId(req.params.id)})
        .then(doc=>{
            res.status(201).json(doc);
    
        })
        .catch(err=>{
            res.status(404).json({error:"not fond"})
        })
    }else{
        res.status(404).json({error:"not fond"})

    }
})
app.post('/employees',(req,res)=>{
    const employee =req.body
    db.collection('employees')
    .insertOne(employee)
    .then(result=>{
        res.status(201).json(result);

    }).catch(err=>{
        res.status(500).json({error:"not sas"})
    })
})

    
app.delete('/employees/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        db.collection('employees')
        .deleteOne({_id: ObjectId(req.params.id)})
        .then(result=>{
            res.status(201).json(result);
    
        })
        .catch(err=>{
            res.status(404).json({error:"not fond"})
        })
    }else{
        res.status(404).json({error:"not fond"})

    }
})
app.patch('/employees/:id',(req,res)=>{
    const updete =req.body
    if(ObjectId.isValid(req.params.id)){
        db.collection('employees')
        .updeteOne({_id: ObjectId(req.params.id)})
        .then(result=>{
            res.status(201).json(result);
    
        })
        .catch(err=>{
            res.status(404).json({error:"not fond"})
        })
    }else{
        res.status(404).json({error:"not fond"})

    }
})