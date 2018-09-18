const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const Gallery = require('express-photo-gallery');

var options = {
  title: 'My Awesome Photo Gallery'
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(fileUpload());
app.use(cors());
// app.use('/photos', Gallery('./images/', options));

// API controllers
const photos = require('./controllers/photos');
app.use('/photos', photos);

app.use(express.static('./public'));

app.listen(3010);
