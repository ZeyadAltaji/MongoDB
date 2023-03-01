// const {MongoClient}=require('mongodb');

// let DBcontion;
// module.exports={
//     connectToDB:(cb)=>{
//         MongoClient.connect('mongodb://localhost:27017/zeyadTesting')
//         .then((clinet)=>{
//             DBcontion =clinet.db()
//             return cb()
//         })
//         .catch(err=>{
//             console.log(err)
//             return cb(err)

//         })
//     },
//     getDB:()=>DBcontion

// }



const { MongoClient } = require('mongodb');
let dbConnection;
exports.connectToDb = async (cb) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/zeyadTesting');
    dbConnection = client.db();
    return cb();
  } catch (error) {
    console.log(error);
    return cb(error);
  }
};


exports.getDb = () => dbConnection;
