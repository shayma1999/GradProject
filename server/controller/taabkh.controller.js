const taabkh = require("../models/taabkh.module.js");



// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  
};



exports.findAll = (req, res) => {
    taabkh.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving taabkhs."
        });
      else res.send(data);
    });
  };