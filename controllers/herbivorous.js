const { animals } = require("../models/db");

const recitifyName2 = function (name) {
  return name.toLowerCase();
};

const addHerbivorousAnimal = (req, res) => {
  let response = {
    message: "",
    error: true,
  };
  let newName = recitifyName2(req.body.name);

  for (let i in animals) {
    if (animals[i].name == newName) {
      response.message = "This Animal already exist";
      return res.status(400).send(response);
    }
  }

  let insertData = {
    id: "127",
    type: "herbivorous",
    name: newName,
    age: "5years",
  };
  animals.push(insertData);

  response.message = "Animal added successfully";
  response.error = false;
  response.data = animals;
  return res.status(200).send(response);
};

exports.addHerbivorousAnimal = addHerbivorousAnimal;

const getHerbivorousAnimal = (req, res) => {
  let response = {
    message: "",
    error: true,
    data: [],
  };

  let herbivorousAnimals = animals.filter((el) => el.type == "herbivorous");

  response.message = "here is the herbivorous data you requested";
  response.error = false;
  response.data = herbivorousAnimals;

  return res.status(200).send(response);
};

exports.getHerbivorousAnimal = getHerbivorousAnimal;

const editHerbivorousAnimal = (req, res) => {
  let response = {
    message: "",
    error: true,
    data: [],
  };

  if (!req.body.name || !req.body.id) {
    response.message = "Missing params here brother";
    return res.status(400).send(response);
  }
  let animal = animals.filter((el) => el.id == req.body.id)[0];

  if (animal) {
    if (animal.type == "herbivorous") {
      animal.name = req.body.name;
      response.message = "updated successfully";
      response.data = animals;
      return res.status(200).send(response);
    }
  } else {
    response.message = "Id missing in body request";
    return res.status(400).send(response);
  }
};

exports.editHerbivorousAnimal = editHerbivorousAnimal;

const deleteHerbivorousAnimal = (req, res) => {
  let response = {
    message: "",
    error: true,
    data: []
  };

  for (let i in animals) {
    if (animals[i].id == req.body.id) {
        response.message = `${req.body.id} is deleted successfully`
      animals.splice(i,1);
      response.data = animals;
      
      return res.status(400).send(response);
    }
  }

};

exports.deleteHerbivorousAnimal = deleteHerbivorousAnimal;
