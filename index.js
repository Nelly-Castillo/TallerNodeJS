const morgan = require('morgan');
const express = require('express');
const dotenv = require('dotenv');
const pokemon = require('./routes/pokemon');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    return res.status(200).json({code: 1, message: "Bienvenido al pokedex"});
})

app.use("/pokemon", pokemon);
app.use ((req, res, next) => {
    return res.status(404).json({code: 404, message: "URL no encontrada"});
})

app.listen(port,() => {
    console.info(`Server is running on port ${port}`);
    console.log(process.env.PORT);
});