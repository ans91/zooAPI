const { animals } = require('../models/db')

const addCarnivorousAnimal = function (req, res) {
    console.log("qwertyuiop", req.body);
    let sendRes = {
        message: "",
        error: true
    }
    let newAnimal = recitifyName(req.body.name)

    for (let i in animals) {
        if (animals[i].name == newAnimal) {
            console.log("aaaaa bhai", "Anmial exist")
            sendRes.message = "Anmial exist"
            return res.status(400).send(sendRes)
        }
    }
    let insertObj = {
        id: "234",
        type: "carnivorous",
        name: newAnimal,
        age: "3years"
    }
    animals.push(insertObj)

    sendRes.message = "Animal added successfully!"
    sendRes.error = false
    sendRes.data = animals

    return res.status(200).send(sendRes)
}
exports.addCarnivorousAnimal = addCarnivorousAnimal

const recitifyName = function (name) {
    return name.toLowerCase()
}

const getAllCarnivorousAnimal = function (req, res) {
    let carnivorousAnimals = animals.filter(el => el.type === 'carnivorous')
    let sendRes = {
        message: "Carnivorous animals fetched successfully!",
        error: false,
        data: carnivorousAnimals
    }
    return res.status(200).send(sendRes)
}
exports.getAllCarnivorousAnimal = getAllCarnivorousAnimal;

//How is the data being changed in the animals arroay of object permanently by doing this?
//We expect it not to change permanently 

const editCarnivorousAnimal = function (req, res) {
    let sendRes = {
        error: true,
        message: ''
    }
    if (!req.body.id || !req.body.age) {
        sendRes.message = "Missing params!"
        return res.status(400).send(sendRes)
    }
    let animal = animals.filter(el => el.id === req.body.id)[0]

    if (animal) {

        if(animal.type !== 'carnivorous'){
            sendRes.message = "NOT ALLOWED TO EDIT THIS!"
            return res.status(400).send(sendRes)
        }

        animal.age = req.body.age
        console.log("qwertyuiop1234567890", animal)
        sendRes.message = `${animal.name} has been updated successfully!`
        sendRes.data = animal
        return res.status(200).send(sendRes);
    } else {
        sendRes.message = "No animal available with this id!"
        return res.status(400).send(sendRes)
    }
}
exports.editCarnivorousAnimal = editCarnivorousAnimal;

const deleteCarnivorousAnimal = function (req, res) {
    let sendRes = {
        error: true,
        message: '',
        data: {}
    }
    if (!req.body.id) {
        sendRes.message = "Id missing";
        return res.status(400).send(sendRes);
    }
    let animal = animals.filter(el => el.id === req.body.id)[0];

    if (animal){
        if(animal.type !== 'carnivorous'){
            sendRes.message = "NOT ALLOWED TO EDIT THIS!"
            return res.status(400).send(sendRes)
        }
        for ( i = 0; i < animals.length; i++ )  {
            if (animals[i].id == req.body.id) {
                animals.splice(i, 1)
                sendRes.message = `${animals.id} has been deleted successfully!`
                sendRes.data = animals
                return res.status(200).send(sendRes);
            }
        }
    }else{
        sendRes.message = "No animal available with this id!";
        return res.status(400).send(sendRes)
    }
}
exports.deleteCarnivorousAnimal = deleteCarnivorousAnimal;


