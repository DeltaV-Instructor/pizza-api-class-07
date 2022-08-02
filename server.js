'use strict';
console.log('!!server.js connected.');


// REQUIRE
// In our server, we have to use 'require' instead of import'
// Here we will list the requirement for a server
// npm i express

//1. npm i express
const express = require('express');
//how we bring in the env file
require('dotenv').config();
let data = require('./data/pizza.json');



// We must include cors if we want to share resources over the web


// USE
// Once I have required something, we have to use it
// this is where we assign the reqired file a variable name
// React does this in one step with 'import',
// it says we must use it and it assign it to a variable
// Express takes 2 steps: 'require' and 'use'
// This is just how Express works.

//2.
const app = express();


// npm i dotenv - define our port, validate that my .env file is working.
//if server runs on 3002, I know something is wrong with my env file.
const PORT = process.env.PORT || 3002;


//Routes we will use to access our end point
/**
 * .get() is an express method
 * it correlates to axios.get
 * the first parameter is a URL in quote
 * the second is a callback function
 */
// our root of our site pass callback () two params
app.get('/', (request, response) => {
  //then we need to send something back.
  response.send('hello from our server!!');
});


app.get('/hello', (request, response) => {
  // localhost:3001/hello?name=bob
  // query: { name: 'bob' }, and the URL in the req
  console.log('request object: ', request.query.name);
  let name = request.query.name;
  let lastName = request.query.lastname;
  // response.send('Hello from our /hello route!');
  response.send(`Hello ${name} ${lastName}`);
});

//add a pizza route
app.get('/pizza', (request, response) => {
  let pizzaType = request.query.pizzatype;
  // http://localhost:3001/pizza?pizzatype=Chicago%20Pizza
  //add data file and look at find(will find the first and returns only that match)
  // let dataToSend = data.find(pizza => pizza.pizzatype === pizzaType);
  let dataToInstant = data.find(pizza => pizza.pizzatype === pizzaType);
  let dataToSend = new Pizza(dataToInstant);
  response.send(dataToSend);
  // now create a class below









});











app.get('*', (request, response) => {
  response.send('The route was not found. Error 404');
});




//Classes
//so we can send over an object and it will construct it as an instance of our pizza object
class Pizza{
  constructor(pizzaObject){
    console.log('Pizza instance construction: ',pizzaObject);
    this.pizzaType = pizzaObject.pizzatype;
    this.location = pizzaObject.location;
  }
}





//Errors






//Listen for port to start the server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
//.listen() is an express method that takes in a PORT value and a callback function
