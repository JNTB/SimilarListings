const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const db = require('../database');
const Listing = require('../database/Listing');

const app = express();
const port = 1128;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/similar', (req, res) => {
  Listing.find({})
    .limit(12)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => console.error(err));
});

app.listen(port, () => console.log(`server listening on port: ${port}`));