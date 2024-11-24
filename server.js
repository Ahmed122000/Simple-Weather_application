// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
const cors = require("cors");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080; 

/**
 * function to acknowledge that the server is running 
 */
const server = app.listen(port, async ()=>{
    console.log("running");
    console.log(`server is running on port ${port}`);
    const { default: open } = await import('open');
    open(`http://localhost:${port}`);
});


//get endpoint
app.get("/all", (req, res)=>{ 
    res.send(projectData); //return the data 
});

//Post endpoint
app.post("/add", (req, res)=> {
    //save the data in the object
    projectData.date=(req.body.date);
    projectData.feeling=(req.body.feeling);
    projectData.temp=(req.body.temp);
    
    res.status(204).end(); //no need for any retunred data so end it with status 204 (no content , successful response)
});

