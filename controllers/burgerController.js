var express = require("express");

var router = express.Router();

//Import the model burger.js to use its functions
var burger_models = require("../models/burger.js");

//Route to load burgers when page opens
router.get("/", function(req, res){
  burger_models.all(function(data){
    var allBurgerData = {
      burgers: data
    };
    console.log(allBurgerData);
    //render all burger data for handlebars
    res.render("index", allBurgerData);
  });
});

//Route to create a new burger when entered by the user
router.post("/api/burger", function(req, res){
  burger_models.create(req.body.name, function(result){
    //send back the id of the newly created burger
    res.json({ id: result.insertId});
  });
});

//Route to update a burger when it is "devoured"
router.put("/api/burger/:id", function(req, res) {
  var id = req.params.id;
  console.log(id);
  burger_models.update(id, function(result){
    if (result.changedRows == 0){
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    console.log(allBurgerData);
  });
});

//export routes for server.js to use
module.exports = router;
