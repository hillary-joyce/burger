//Import MySQL connection
var connection = require("./connection.js");

//Object for SQL statement functions
var orm = {
  //Select all donuts from the donut_db
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM "+ tableInput + ";";
    connection.query(queryString, function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  },

  //Insert a new donut into the database
  insertOne: function(donut_name, cb) {
    var queryString = "INSERT INTO donuts (donut_name) VALUES (?);"
    connection.query(queryString, [donut_name], function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
      console.log("donut added");
    });
  },
  //Update a donut - change from not devoured to devoured
  updateOne: function(parameterToUpdate, update, donut_id, cb) {
    var queryString = "UPDATE donuts SET ?? = ? WHERE id = ?;"
    connection.query(queryString, [parameterToUpdate, update, donut_id],
      function(err, result){
        if(err) {
          throw err;
        }
        cb(result);
        console.log("donut updated");
      });
    }
};

module.exports = orm;
