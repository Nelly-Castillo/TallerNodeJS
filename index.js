const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const name = 'Nelly';

app.get('/', (req, res) => {
    res.send(`Helo World ${port}`)
})

app.get('/myname', (req, res) => {
    res.send(`Helo World! My name is  ${name}`)
})

app.listen(port,() => {
    console.info(`Server is running on port ${port}`);
    console.log(process.env.PORT);
    console.log(name);
});