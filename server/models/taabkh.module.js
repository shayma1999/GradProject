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
  this.	list_l1 = taabkh.list_l1;
  this.list_l11 = taabkh.list_l11;
  this.list_l3 = taabkh.list_l3;
  this.list_l4 = taabkh.list_l4;
  this.list_l5 = taabkh.list_l5;
  this.list_l6 = taabkh.list_l6;
  this.list_l7 = taabkh.list_l7;
  this.list_l8 = taabkh.list_l8;
  this.list_l9 = taabkh.list_l9;
  this.list_l10 = taabkh.list_l10;
  this.list_l111 = taabkh.list_l111;
  this.list_l13 = taabkh.list_l13;
  this.list_l14 = taabkh.list_l14;
  this.list_l15 = taabkh.list_l15;
  this.list_l16 = taabkh.list_l16;
  this.list_l17 = taabkh.list_l17;
  this.list_l18 = taabkh.list_l18;
  this.list_l19 = taabkh.list_l19;
  this.list_way = taabkh.list_way;
  this.list_name1 = taabkh.list_name1;
  this.list_l1w = taabkh.list_l1w;
  this.list_l11w = taabkh.list_l11w;


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