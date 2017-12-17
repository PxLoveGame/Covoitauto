const tripsExpress = require('express');
const tripsService = require('services/trips.service');
let tripsRouter = express();

//Routes
router.post('/newTrip', create);
router.put('/:id', update);
router.get('/', getAll);
router.get('/:id', getCurrent);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res){
    //TODO
    res.send("OK !");  
}

function update(req, res){
    //TODO
}

function _delete(req, res){
    //TODO
}

function getAll(req, res){
    getAllTrips({"route": "/trips"}, function(results){
        console.log("recupération en base de tous les covoiturages")
        res.setHeader("Content-type","application/json, charset = UTF-8");
        let json = JSON.stringify(results);
        console.log(json);
        res.end(json);
    })
}

function getCurrent(req, res){
    // TODO
}


function getByParam(req, res){
    //TODO
}


    