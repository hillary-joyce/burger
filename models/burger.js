var orm = require("../config/orm.js");

var burgerModels = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
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
module.exports = burgerModels;
