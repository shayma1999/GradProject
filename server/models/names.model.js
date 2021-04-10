const sql = require("./db.js");

// constructor
const Names = function(names) {
  this.list_title = names.list_title;

};


Names.getAll = result => {
    sql.query("SELECT * FROM names", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("names: ", res);
      result(null, res);
    });
  };
  module.exports = Names;