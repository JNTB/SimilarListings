const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/airbnb')
  .then(() => console.log(`connected to mongoDB (airbnb)`))
  .catch(err => console.error(`unable to connect to mongoDB: ${err}`))
;

const connection = mongoose.connection;

module.exports = connection;