const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
   
    Tag.findAll({
      include: [
        Product
      ],
    })
      .then((products) => res.json(products))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
      //working
  });




router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

    // working 
    Tag.findOne({
      where: {
        id: req.params.id
      },
     include: [
         Product
      ]
    }).then(data => {
    
      res.json(data)
    
     })
    
  });









router.post('/', (req, res) => {
  // create a new tag

      Tag.create({
      id : req.body.id,
      tag_name: req.body.tag_name
      }).then(data => {
    
        res.json(data)
      
       })
//working  
    });




router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(data => {
  
    res.json(data)
  
   })
//working   
});




router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
  
      res.json(data)
    
     })
  //working
  });


module.exports = router;
