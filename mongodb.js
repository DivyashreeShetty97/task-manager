// Create Read Update Delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient; // gives access to necessary functions to connect to db
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to db!');
    }
    const db = client.db(databaseName);

    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

    // db.collection('users').deleteMany({
    //     age: 24
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
    
    /////////////////////////////////////////////////////////
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("624a8a1ea72e6348220c79d5")
    // }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //////////////////////////////////////////////////////////////////
    // db.collection('users').findOne({ _id: new ObjectID("624a8a1ea72e6348220c79d5") }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result._id);
    // })

    // db.collection('users').find({ age: 24 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(users);
    // })

    // db.collection('users').find({ age: 24 }).count((error, count) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(count);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("624ab0856671ac4369df7c7e") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(tasks);
    // })
    //////////////////////////////////////////////////////////////
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Mummy',
    //     age: 51
    // },
    // (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.insertedId);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Badi',
    //         age: 26
    //     },
    //     {
    //         name: 'Om',
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.insertedIds);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Do the dishes',
    //         completed: true
    //     },
    //     {
    //         description: 'Complete the course',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.insertedIds);
    // })
})