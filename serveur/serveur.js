// const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const config = require('config.json');
const express = require('express');
const expressJwt = require('express-jwt');
const bodyParser = require('bodyParser');
let cors = require('cors');
const app = express();

/* Utile ?
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
*/

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/users", require('./controllers/user.controller'));
app.use("/trips", require('./controllers/trips.controller'));

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
app.use(expressJwt({
    secret: config.secret,
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({ path: ['/users/login', '/users/register'] }));

app.listen(8080, () => console.log('Example app listening on port 8080!'))

