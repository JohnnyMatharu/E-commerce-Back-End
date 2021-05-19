// Explanation at bottom
// Consult 13.5, module, etc.
// Main files to be worked by step, models, index.js(models), api routes, server and may be database
// Main question today, by when insomnia core, how and when to start testing if all working since starter code 
//According to other module assignment, connection.js is serving connection to SQl, models are defined under js files, 
//and their relationship on index.js, then 
//these relations are exported, and accessed by API routes, Server.js is connection to server only, CRUD is 
//happening on API routes using server, after that all the data from routes combined on index.js along with 
//middlewear and exported back to server.js, server.js is just a middle person access body to database and connection.js is to establish 
//that connection. Seeds file is to use those classes and relations to create model tables in SQL, and seeds/index.js
//is the connection of all seeds and connection to SQL database asynchronously to create new tables
//using new classes, all this is linked to database which is created through schema.sql. All Changes
//to database will be seen by insomnia, CRUD operations to be covered by insomnia using video
//check connection, all models, index.js relations including 'as', testing incl insomnia and update acceptance critieria   


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

//installed sql2, sequelize, dotenv, rest could be seen through dependencies
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
/*
Acceptance Criteria
GIVEN a functional Express.js API

HERE

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