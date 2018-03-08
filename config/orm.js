//Import MySQL connection
var connection = require("../config/connection.js");


//Object for SQL statement functions
var orm = {
  //Select all burgers from the burger_db
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??;"
    connection.query(queryString, [tableInput], function(err, result){
      if (err) throw err;
      console.log(result);
    })
  },
  //Insert a new burger into the database
  insertOne: function(burger_name, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?);"
    connection.query(queryString, [burger_name], function(err, result){
      if (err) throw err;
      console.log("burger added");
    })
  },
  //Update a burger - change from not devoured to devoured
  updateOne: function(parameterToUpdate, update, burger_id, cb) {
    var queryString = "UPDATE burgers SET ?? = ? WHERE id = ?;"
    connection.query(queryString, [parameterToUpdate, update, burger_id],
      function(err, result){
        if(err) throw err;
        console.log("burger updated");
      })
    }
}

module.exports = orm;
