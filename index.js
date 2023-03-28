const express = require('express');
const parser = require("body-parser");
const allAnimals = require('./routes/allAnimals');
const carnivorous = require('./routes/carnivorous');
const herbivorous = require('./routes/herbivorous');

const app = express();
const port = 4000;

app.use(parser.json());

app.use('/', allAnimals);
app.use('/carnivorous', carnivorous);
app.use('/herbivorous', herbivorous);

app.listen(port, (error) => {
    if(error){
        console.log("Bhai error aa gaya");
    }
    console.log("Server is running on this port", `http://localhost:${port}`);
})