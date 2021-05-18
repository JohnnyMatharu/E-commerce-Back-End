//explanation at bottom


const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
 
 Category.findAll
  // find all categories
  // be sure to include its associated Products
  res.json('hello')
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;


// api/categories call this this.route, routes are made already
 //finish models, and routes in api folder, nothing server.js, put in insomnia in end to test  
 
//Hilary
/*
Hilary:
Insomnia
Or
Postman
Postman is easier, both almost same, if using mention in submission 

You can use table plus application if needed

Submit video of backend
Mock up gifs, videos

Starter code
Notes on starter

Ecommerce site:
Express API: use sequelize to connect database

Connection.js: variables wil go to .env file

Starter code contains seed files, database is created

Notes in server.js

*/

//routes to index to api, to index to express, api routes use models using sequelize and return
//models to model database and seeds to fill value , npm i installed, check dependencies if needed