const express = require('express');
const fileUpload = require('express-fileupload');
var cors = require('cors');
const app = express();

app.use(express.static('./public'));

app.use(fileUpload());
app.use(cors());

const photos = require('./controllers/photos');
app.use('/photos', photos);

app.listen(3010);
