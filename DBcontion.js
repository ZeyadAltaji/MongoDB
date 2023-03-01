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



// const { MongoClient } = require('mongodb');
// let dbConnection;
// exports.connectToDb = async (cb) => {
//   try {
//     const client = await MongoClient.connect('mongodb://localhost:27017/zeyadTesting');
//     dbConnection = client.db();
//     return cb();
//   } catch (error) {
//     console.log(error);
//     return cb(error);
//   }
// };


// exports.getDb = () => dbConnection;



// const MongoClient = require('mongodb').MongoClient;

// const uri = 'mongodb://localhost:27017/zeyadTesting/directConnection=true&serverSelectionTimeoutMS=20000'
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
// const collection = client.db("BookStore").collection("Author");
// // perform actions on the collection object
// client.close();
// });