// Explanation at bottom
// Consult 13.5, module, etc.
//According to other module assignment, connection.js is serving connection to SQl, models are defined under js files, 
//and their relationship on index.js, then these relations are exported, and accessed by API routes, Server.js is connection to server only, CRUD is 
//happening on API routes using server, after that all the data from routes combined on index.js along with 
//middlewear and exported back to server.js, server.js is just a middle person access body to database and connection.js is to establish 
//that connection. Seeds file will take info by 'npm run seed' to get info from seeds folder, port and sql server needs to be running with insomnia
//is the connection of all seeds and connection to SQL database asynchronously to create new tables
//using new classes, all this is linked to database which is created through schema.sql. All Changes
//to database will be seen by insomnia, CRUD operations to be covered by insomnia using video, make sure develop folder

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
 
 Category.findAll({
  include: [
    Product
  ]
 }).then(data => {
 
  res.json(data)

 })
});


router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    }
  }).then(data => {
  
    res.json(data)
  
   })
});



router.post('/', (req, res) => {
  // create a new category
    Category.create({
    id : req.body.id,
    category_name: req.body.category_name
    }).then(data => {
  
      res.json(data)
    
     })
     });



router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(data => {
  
    res.json(data)
  
   })
   
});



router.delete('/:id', (req, res) => {

  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
  
      res.json(data)
    
     })
    });
  

module.exports = router; 

//installed sql2, sequelize, dotenv, rest could be seen through dependencies

