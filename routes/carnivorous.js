const express = require('express');
const router = express.Router();
const { addCarnivorousAnimal, getAllCarnivorousAnimal, editCarnivorousAnimal, deleteCarnivorousAnimal } = require('../controllers/carnivorous');

router.post('/', (req, res) => { addCarnivorousAnimal(req, res) })

router.get('/', (req, res) => { getAllCarnivorousAnimal(req, res) })

router.patch('/', (req, res) => { editCarnivorousAnimal(req, res) })

router.delete('/', (req, res) => { deleteCarnivorousAnimal(req, res) })

module.exports = router;