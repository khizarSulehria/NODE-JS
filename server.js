const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const db = require('./config');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));



mongoClient.connect(db.url,(err,database)=>{
    if(err) return console.log(err);

    let dbObj = database.db('notes');
    require('./app/route/index')(app,dbObj);

    app.listen(8000,()=>{
        console.log("listing to port 8000");
    });
});
