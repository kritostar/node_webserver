require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// Static Content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Carolina Facchini',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Carolina Facchini',
        titulo: 'Curso de Node (Generic)'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Carolina Facchini',
        titulo: 'Curso de Node (Elements)'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })