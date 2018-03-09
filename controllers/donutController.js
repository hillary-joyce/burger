var express = require("express");

var router = express.Router();

//Import the model donut.js to use its functions
var donut_models = require("../models/donut.js");

//Route to load donuts when page opens
router.get("/", function(req, res){
  donut_models.all(function(data){
    var alldonutData = {
      donuts: data
    };
    console.log(alldonutData);
    //render all donut data for handlebars
    res.render("index", alldonutData);
  });
});

//Route to create a new donut when entered by the user
router.post("/api/donut", function(req, res){
  donut_models.create(req.body.donut_name, function(result){
    //send back the id of the newly created donut
    res.json({ id: result.insertId});
  });
});

//Route to update a donut when it is "devoured"
router.put("/api/donut/:id", function(req, res) {
  var id = req.params.id;
  console.log(id);
  donut_models.update(id, function(result){
    if (result.changedRows == 0){
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    console.log("donut devoured");
  });
});

//export routes for server.js to use
module.exports = router;
