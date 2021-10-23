//Dependencies
const express = require("express");
const clientRouter = express.Router();
const Client = require("../models/client.js");

//Export
module.exports = clientRouter;

// ROUTES

// INDEX 
// clientRouter.get("/", (req, res) => {
//     res.send("hello world");
// });
clientRouter.get("/", async (req, res) => {
    try {
        // send all people
        res.json(await Client.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// PEOPLE CREATE ROUTE
clientRouter.post("/", async (req, res) => {
    try {
        // send all people
        res.json(await Client.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});