const sql = require("./db.js");

// constructor
const finalfinal = function(finalfinal) {
  this.list_title = finalfinal.list_title;
  this.list_img = finalfinal.list_img;
  this.list_p = finalfinal.list_p;
  this.	list_time = finalfinal.	list_time;
  this.list_timeA = finalfinal.list_timeA;
  this.	list_time1 = finalfinal.list_time1;
  this.list_time1A = finalfinal.list_time1A;
  this.	list_count = finalfinal.list_count;
  this.list_countA = finalfinal.list_countA;
  this.	list_amount = finalfinal.list_amount;
  this.list_name = finalfinal.list_name;
  this.list_Idiv = finalfinal.list_Idiv;
 
};

finalfinal.getAll = result => {
    sql.query("SELECT * FROM finalfinal", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("finalfinal: ", res);
      result(null, res);
    });
  };
  module.exports = finalfinal;