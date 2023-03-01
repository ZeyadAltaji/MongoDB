const {MongoClient}=require('mongodb');

let DBcontion;
module.exports={
    connectToDb:(cb)=>{
        MongoClient.connect('mongodb://127.0.0.1:27017/zeyadTesting')
        // MongoClient.connect(')
        .then((clinet)=>{
            DBcontion =clinet.db()
            return cb()
        })
        .catch(err=>{
            console.log(err)
            return cb(err)

        })
    },
    getDb:()=>DBcontion

}


