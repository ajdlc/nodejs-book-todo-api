// const MongoClient = require('mongodb').MongoClient;

// ES6 Object Destructuring 
const {MongoClient, ObjectID} = require('mongodb');

// Create new ObjectID's
// var obj = new ObjectID();
// console.log(obj);



// ES6 Object Destructuring
// var user = {name: "AJ", age: 26};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } , (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db('TodoApp');

    // For the collection
    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: "AJ",
    //     age: 26,
    //     location: "California"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Error, unable to insert record.", err);
    //     }
    //     // Return the timestamp that is created from the ObjectId
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
});