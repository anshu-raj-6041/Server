// server create krne ke liye
const express = require("express");
const app = express();

// used to parse req.body in express
const bodyParser = require("body-parser");

// Server Instantiate
app.listen(3000, () => {
    console.log("Server started at port no. 3000");

});

// activate the server on port 3000
app.get('/', (request, response) => {
    response.send("Hello Anshu");
})

// data submit krna hai
// routes
app.post('/api/cars', (request, response) => {
    const { name, brand } = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submmited successfully.");


})