//DENPENDENCIES
const morgan = require('morgan');
const express = require('express');
const dotenv = require('dotenv');
//ROUTES
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//MIDDELWARE
const auth = require('./middelware/auth');
const notFound = require('./middelware/notFound');
const home = require('./middelware/home');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', home)

app.use("/user", user);

app.use(auth);

app.use("/pokemon", pokemon);


app.use (notFound);

app.listen(port,() => {
    console.info(`Server is running on port ${port}`);
    console.log(process.env.PORT);
});