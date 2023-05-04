const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; 

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Recipe routes is running')
});


app.get('/chefs', (req, res) => {
    console.log(chefs);
    res.send(chefs);
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedRecipe = recipes.find(n => n._id === id);
    res.send(selectedRecipe)
})


app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    const chefRecipe = recipes.filter(n => parseInt(n.chef_id) === id);
    res.send(chefRecipe)

})

app.listen(port, () => {
    console.log(`Recipe API is running on port ${port}`)
})