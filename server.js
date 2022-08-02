'use strict';
console.log('server.js connected.');


// REQUIRE
// In our server, we have to use 'require' instead of import'
// Here we will list the requirement for a server
// npm i express

//1. npm i express
const express = require('express');
//how we bring in the env file
require('dotenv').config();



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



//Errors






//Listen for port to start the server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
//.listen() is an express method that takes in a PORT value and a callback function
