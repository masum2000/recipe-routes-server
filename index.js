const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; 

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Recipe routes is running')
});


app.get('/chefs', (req, res) => {
    console.log(chefs);
    res.send(chefs);
})


app.listen(port, () => {
    console.log(`Recipe API is running on port ${port}`)
})