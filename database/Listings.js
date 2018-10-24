const mongoose = require('mongoose');
const connection = require('./');

const listingSchema = new mongoose.Schema({
  name: String,
  type: String,
  verified: Boolean,
  price: Number,
  Rating: Number,
  numRatings: Number
}, 
  {
    timestamps: false
  }
)

const SimilarListing = mongoose.model('SimilarListing', listingSchema);

module.exports = SimilarListing;