const config = require('config.json');
const _ = require('lodash');
const Q = require('q'); // Promise
const mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('trips'); // ===> db.collection('trips')


function creatTrip(params, callback){
    db.trips.insert(params["newInsert"], function(err, docs){
        if(err)
            callback(err, []);
        else if(docs !== undefined)
            callback(params["route"], docs);
        else
            callback(params["route"], []);
    })
}

// All trips
function getAllTrips(params, callback){
    db.trips.find().toArray(function(err, docs){
        if(err)
            callback(err, []);
        else if(docs !== undefined)
            callback(params["route"], docs);
        else
            callback(params["route"], []);
    })
}

function getByParam(params, callback){
    db.trips.find(params["filterObject"]).toArray(function(err, docs){
        if(docs !== undefined)
            callback(params["route"], docs);
        else
            callback(params["route"], []);
    })
}

