const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
let cors = require('cors');
const app = express();

app.use(cors());

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'Covoitauto';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
assert.equal(null, err);
//Database creation
const db = client.db(dbName);
// Collection creation
const trips = db.collection("trips");
const users = db.collection("users");


// ====== Trips request ======

// create trips
function postTrip(params, callback){
    trips.insert(params["newInsert"], function(err, docs){
        if(err)
            callback(err, []);
        else if(docs !== undefined)
            callback(params["route"], docs);
        else
            callback(params["route"], []);
    })
}

app.post('/trips-create', function(req, res){

postTrip
res.send("OK !");
})

// All trips
function getAllTrips(params, callback){
    trips.find().toArray(function(err, docs){
        if(err)
            callback(err, []);
        else if(docs !== undefined)
            callback(params["route"], docs);
        else
            callback(params["route"], []);
    })
}

app.get('/trips', function(req, res){
    getAllTrips({"route": "/trips"}, function(results){
        console.log("recupération en base de tous les covoiturages")
        res.setHeader("Content-type","application/json, charset = UTF-8");
        let json = JSON.stringify(results);
        console.log(json);
        res.end(json);
    })
});

//trips research

function tripsResearch(params, callback){
    trips.find(params["filterObject"]).toArray(function(err, docs){
        if(docs !== undefined)
            callback(params["route"], docs);
        else
            callback(params["route"], []);
    })
}

app.get('/trips/:townD/:townA/:HourD/:DateD', function(req, res){
    let filterObject = {"townD" : null, "townA" : null, "HourD" : null, "DateD" : null};
    if(req.params.townD != '*') {filterObject.townD = req.params.townD;}
    if(req.params.townA != '*') {filterObject.townA = req.params.townA;}
    if(req.params.HourD != '*') {filterObject.HourD = req.params.HourD;}
    if(req.params.DateD != '*') {filterObject.DateD = req.params.DateD;}
    tripsResearch(trips, {"route" : "/trips", "filterObject" : filterObject}, function(results){
        console.log("récupération en base des covoiturages selon les critères saisis");
        res.setHeader("Content-type","application/json, charset = UTF-8");
        let json = JSON.stringify(results);
        console.log(json);
        res.end(json);
    })
})

// ====== Users Request ======


app.listen(8080, () => console.log('Example app listening on port 8080!'))

});