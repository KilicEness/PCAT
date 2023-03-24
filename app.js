const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');

const app = express();

//CONNECT DATABASE
mongoose.connect('mongodb://localhost/pcat-test-db')

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MİDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//ROUTES
app.get('/', async (req, res) => {
  const photos = await Photo.find({})
  res.render('index', {
    photos
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} de başlatıldı.`); //bactick option + , ile yapıldı.
});
