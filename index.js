const express = require('express');
const dotenv = require('dotenv');
const { pokemon } = require('./pokedex.json')

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const name = 'Nelly';

app.get('/', (req, res) => {
    res.status(200);
    res.send("Bienvenido al Pokedex");
})

app.get("/pokemon",(req,res, next) => {
    req.params.name;
    res.status(200);
    res.send(pokemon);
    
});

app.get('/pokemon/:id', (req,res, next) => {
    res.status(200);
    console.log(req.params)
    res.send(pokemon[req.params.id-1]);
});

app.listen(port,() => {
    console.info(`Server is running on port ${port}`);
    console.log(process.env.PORT);
    console.log(name);
});