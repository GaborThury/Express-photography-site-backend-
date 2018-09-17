const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const models = require('./models');
const Gallery = require('express-photo-gallery');

var options = {
  title: 'My Awesome Photo Gallery'
};

app.use(fileUpload());

// app.use('/photos', Gallery('./images/', options));

// API controllers
const photos = require('./controllers/photos');
app.use('/photos', photos);

app.use(express.static('./public'));

app.listen(3010);
