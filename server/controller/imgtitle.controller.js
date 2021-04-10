const imgtitle = require("../models/imgtitle.module.js");



// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  
};



exports.findAll = (req, res) => {
    imgtitle.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };