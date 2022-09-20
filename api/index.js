import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import FindAddRoute from './Routes/FindAddRoute.js';
import SearchRoute from './Routes/SearchRoute.js';
import { MongoClient } from 'mongodb'

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
dotenv.config()

mongoose
    .connect(process.env.MONGODB_URI, {
        // dbName: process.env.DB_NAME,
        // user: process.env.DB_USER,
        // pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Mongodb connected....');
    })
    .catch(err => console.log(err.message));

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db...');
});

mongoose.connection.on('error', err => {
    console.log(err.message);
});


    
app.listen(4000, () => {
    console.log(`Listening at 4000`);
});

app.use('/property', FindAddRoute)
app.use('/search', SearchRoute)

// Running local mongoDB (not containerised)
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const dbName = 'myProject';

// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('documents');

//     // the following code examples can be pasted here...

//     return 'done.';
// }

// async for conatainerised db - didn't work
// main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());

// const connectDB = async () => {
//     await mongoose
//         .connect("mongodb://localhost:27017/db", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//     });

//     const connection = mongoose.connection;
//     connection.once("open", () => {
//         console.log("Mongodb connection established")
//     });
// }

// connectDB().catch(err => console.log(err))

// containerised db - works.
// mongoose
//     .connect("mongodb://localhost:27017/db", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

// const connection = mongoose.connection;
// connection.once("open",() => {
//     console.log("Mongodb connection established")
// });