const express = require('express');
const path = require('path');
const photos = express.Router();
const models = require('../models');
const Photo = models.Photo;

// Get
photos.get('/', (req, res) => {
  Photo.findAll().then((allPhoto) => {
    res.send(allPhoto);
  });
});

// Create
photos.post('/', (req, res) => {
  let originalFileName = req.files.photo.name.split('.');
  let fileName = Math.random().toString(36).substr(2, 16);
  let fileExtension;
  let photo = req.files.photo;
  let splittedFilename = req.files.photo.name.split('.');
  fileExtension = splittedFilename.pop();

  if (!((fileExtension === 'jpg') || (fileExtension === 'png') || (fileExtension === 'jpeg'))) {
    return res.status(400).send({message: 'The server rejected this file!'});
  }

  photo.mv((path.join(__dirname, '..', 'public', 'uploads', fileName + '.' + fileExtension)), (error) => {
    if (error) {
      return res.send('Upload failed!' + error);
    } else {
      console.log('Upload succesful!');
    }
  });

  let photoParams;

  photoParams = {
    title: originalFileName[0],
    url: fileName + '.' + fileExtension,
    category: req.body.category
  };

  Photo.create(photoParams).then(photo => {
    res.send(['Upload succesful!']);
  }).catch(error => {
    res.status(500).json(error);
  });
});

module.exports = photos;
