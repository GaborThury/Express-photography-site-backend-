const express = require('express');
const path = require('path');
const photos = express.Router();
const models = require('../models');
const Photo = models.Photo;

// Get
photos.get('/', (req, res) => {
  res.send('YEEEEELLOOOOO');
});

// Create
photos.post('/', (req, res) => {
  console.log('\n \n********* PHOTOS.POST *********');

  let photo = req.files.photo;
  let fileName = req.files.photo.name;

  photo.mv((path.join(__dirname, '..', 'public', 'uploads', fileName)), (error) => {
    if (error) {
      console.log(error);
      return res.send(error);
    } else {
      res.send('Upload succesful!');
    }
  });
});
module.exports = photos;
