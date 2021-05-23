
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
 
 Category.findAll({}).then(data => {
  
  res.json(data)

 })
  // working
});


router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    }
  }).then(data => {
  
    res.json(data)
  
   })
   //working
  
});



router.post('/', (req, res) => {
  // create a new category
    Category.create({
    id : req.body.id,
    category_name: req.body.category_name
    }).then(data => {
  
      res.json(data)
    
     })
     //working
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
   //working
});



router.delete('/:id', (req, res) => {
  
  // delete a category by its `id` value
  // working for new entries
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


/*
Acceptance Criteria

WHEN I add my database name, MySQL username, and MySQL password to an
environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL
database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
*/
