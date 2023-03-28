const express = require('express');
const { animals } = require('../models/db');
const router = express.Router();

router.post('/', (req,res) => {
    //create
    console.log("Post running");
    res.end("Post running");
})

router.get('/', (req,res) => {
    //read
    console.log("Get running");
    res.send(animals);
})

router.patch('/', (req,res) => {
    //edit
    console.log("Patch running");
     res.end("Patch running");
})

router.delete('/', (req,res) => {
    //delete
    console.log("Delete running");
     res.end();
})

module.exports = router;