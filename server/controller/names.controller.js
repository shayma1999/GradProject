const names = require("../models/names.model.js");



// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  
};



exports.findAll = (req, res) => {
    names.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };