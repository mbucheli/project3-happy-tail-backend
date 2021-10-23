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
        res.json(await Client.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// DELETE
// app.delete("/:id", async (req, res) => {
//     try {
//       res.json(await Client.findByIdAndRemove(req.params.id));
//     } catch (error) {
//       //send error
//       res.status(400).json(error);
//     }
//   });

// CREATE
clientRouter.post("/", async (req, res) => {
    try {
        res.json(await Client.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// UPDATE 
// app.put("/:id", async (req, res) => {
//     try {
//       res.json(
//         await Client.findByIdAndUpdate(req.params.id, req.body, { new: true })
//       );
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   });