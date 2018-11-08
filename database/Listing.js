const mongoose = require('mongoose');
const connection = require('.');

const listingSchema = new mongoose.Schema({
  name: String,
  listingType: String,
  numBeds: Number,
  verified: Boolean,
  price: Number,
  rating: Number,
  numRatings: Number,
  pictures: String
}, 
  {
    timestamps: false
  }
)

const SimilarListing = mongoose.model('SimilarListing', listingSchema);

module.exports = SimilarListing;