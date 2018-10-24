const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb')
  .then(() => console.log(`connected to mongoDB (airbnb)`))
  .catch(err => console.error(`unable to connect to mongoDB: ${err}`))
;

const connection = mongoose.connection;

module.exports = connection;