var orm = require("../config/orm.js");

var donutModels = {
  all: function(cb) {
    orm.selectAll("donuts", function(res) {
      cb(res);
    });
  },
  create: function(vals, cb) {
    orm.insertOne(vals, function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.updateOne("devoured", true, condition, function(res){
      cb(res);
    });
  }
}
module.exports = donutModels;
