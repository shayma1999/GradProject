const sql = require("./db.js");

// constructor
const Imgtitle = function(imgtitle) {
  this.list_title = imgtitle.list_title;
  this.list_img = imgtitle.list_img;

};

Imgtitle.getAll = result => {
    sql.query("SELECT * FROM imgtitle", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("imgtitle: ", res);
      result(null, res);
    });
  };
  module.exports = Imgtitle;