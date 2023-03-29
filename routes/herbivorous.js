const express = require('express');
const { animals } = require('../models/db');
const router = express.Router();
const { addHerbivorousAnimal, getHerbivorousAnimal, editHerbivorousAnimal, deleteHerbivorousAnimal } = require("../controllers/herbivorous")

//create
router.post('/', (req, res) => { addHerbivorousAnimal(req, res) })

//read
router.get('/', (req, res) => { getHerbivorousAnimal(req, res) })

//edit/update
router.patch('/', (req, res) => {editHerbivorousAnimal(req, res) })

//delete
router.delete('/', (req, res) => { deleteHerbivorousAnimal(req, res) })

module.exports = router;