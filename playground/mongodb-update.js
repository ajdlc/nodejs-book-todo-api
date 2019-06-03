// const MongoClient = require('mongodb').MongoClient;

// ES6 Object Destructuring 
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } , (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({
    //     // Filter part
    //     _id: new ObjectID('5cf55b7598eefe75c9a9850e')
    // }, {
    //     // Update part
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     // Options part
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })
    
    // Challenge code
    db.collection('Users').findOneAndUpdate({
        // Filter part
        _id: new ObjectID('5cf498920d1b75139ce6bbba')
    }, {
        // Update part
        $set: {
            name: "Jennifer"
        },
        $inc: {
            age: 1
        }
    }, {
        // Options part
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    // client.close();
});