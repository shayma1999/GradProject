module.exports = app => {
    const names = require("../controller/names.controller.js");
    const customers = require("../controller/customer.controller.js");
    const imgtitle = require("../controller/imgtitle.controller.js");
    const taabkh = require("../controller/taabkh.controller.js");
  
    
  
    // Retrieve all Customers
   app.get("/names", names.findAll);
   

 app.post("/customers", customers.create);

  // Retrieve all Customers
  app.get("/customers", customers.findAll);

  // Retrieve all recipes
  app.get("/taabkh", taabkh.findAll);

  // Retrieve all imgtitle
  app.get("/imgtitle", imgtitle.findAll);

  // Retrieve a single Customer with customerId
  app.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/customers", customers.deleteAll);
    
  };

 