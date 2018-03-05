var orm = require("./config/orm.js");

// orm.selectAll("burgers");
//
// orm.insertOne("Ranch burger");
//
// orm.selectAll("burgers");

orm.updateOne("devoured", "1", "2");
orm.selectAll("burgers");
