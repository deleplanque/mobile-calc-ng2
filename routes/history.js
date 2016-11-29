var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://roman:1234@ds113668.mlab.com:13668/calculator', ['history']);

//get all histories
router.get('/histories', function(req, res, next){
    db.history.find(function(err, histories){
        if(err){
            res.send(err);
        }
        res.json(histories);
        console.log(histories)
    });
});

//get single history
router.get('/history/:id', function(req, res, next){
    db.history.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, history){
        if(err){
            res.send(err);
        }
        res.json(history);
        console.log(history)
    });
});

//save history
router.post('/history', function(req, res, next){
    var task = req.body;
    if(!task.expression){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.history.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

module.exports = router;