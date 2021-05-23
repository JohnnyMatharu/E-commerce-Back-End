
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



