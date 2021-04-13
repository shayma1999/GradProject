const sql = require("./db.js");

// constructor
const taabkh = function(taabkh) {
  this.list_p = taabkh.list_p;
  this.	list_time = taabkh.	list_time;
  this.list_timeA = taabkh.list_timeA;
  this.	list_time1 = taabkh.list_time1;
  this.list_time1A = taabkh.list_time1A;
  this.	list_count = taabkh.list_count;
  this.list_countA = taabkh.list_countA;
  this.	list_amount = taabkh.list_amount;
  this.list_name = taabkh.list_name;
  this.list_Idiv = taabkh.list_Idiv;
 
};

taabkh.getAll = result => {
    sql.query("SELECT * FROM taabkh", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("taabkh: ", res);
      result(null, res);
    });
  };
  module.exports = taabkh;
