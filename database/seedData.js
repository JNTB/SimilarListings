const db = require('./');
const Listing = require('./Listing');

let mockData = [];

let adjOpts = ['Beautiful', 'Centrally Located', 'Amazing', 'Secluded', 'Romantic', 'Unique', 'Luxury', 'Spacious', 'Chic', 'Gorgeous', 'Cozy', 'Vintage'];
let typeOpts = ['Loft', 'House', 'Home', 'Penthouse', 'House', 'House', 'House', 'Apartment', 'Apartment', 'Home', 'Apartment', 'Studio', 'Condo', 'Treehouse'];
let addonOpts = ['Private Balcony', 'Private Pool', 'Great Location', 'Parking Included', 'Free Parking', '', '', '', 'Awesome View', '', '', '', 'Garage Parking'];
let locationOpts = ['Midtown', 'Downtown', 'City Center', 'Buckhead', 'College Park', 'Virginia Highlands'];
let dirOpts = ['East', 'West', 'North', 'South', 'Central', '', '', '', ''];
let groupOpts = ['Couples', 'Large Groups', 'Families'];
let numOpts = ['5', '5', '5', '10', '10', '2', '', '15'];

for (var i = 0; i < 100; i++) {
  let listing = {};

  let adj = adjOpts[Math.floor(Math.random() * adjOpts.length)];
  let type = typeOpts[Math.floor(Math.random() * typeOpts.length)];
  let addon = addonOpts[Math.floor(Math.random() * addonOpts.length)];
  let location = locationOpts[Math.floor(Math.random() * locationOpts.length)];
  let dir = dirOpts[Math.floor(Math.random() * dirOpts.length)];
  let group = groupOpts[Math.floor(Math.random() * groupOpts.length)];
  let num = numOpts[Math.floor(Math.random() * numOpts.length)];
  let numBeds = Math.ceil(Math.random() * 5);
  
  let titleOpts = [
    `${adj} ${type} in ${dir} ${location} ${addon}`,
    `${adj} ${type} ${num} minutes from ${dir} ${location} ${addon}`,
    `${adj} ${dir} ${location} ${type} Perfect for ${group} ${addon}`,
    `${adj} ${type} in the Heart of ${location} ${addon}`,
    `${adj} Smart ${type} Great for Long Stays ${addon}`,
    `The Best ${location} Location ${adj} ${addon}`,
    `For ${group}, ${adj} ${location} ${type}`,
    `${dir} ${location} ${adj} ${addon}`
  ];

  let title = titleOpts[Math.floor(Math.random() * titleOpts.length)];
  
  let listingType, verified, price, rating, numRatings;
  if (type === 'House' || type === 'Home') listingType = 'Entire House';
  else if (type === 'Apartment') listingType = 'Entire Apartment';
  else if (type === 'Penthouse' || type === 'Condo' || type === 'Studio') listingType = 'Entire Condominium';
  else if (type === 'Treehouse') listingType = 'Treehouse';
  else if (type === 'Loft') listingType = 'Loft';

  if (Math.random() > 0.75) verified = true;
  else verified = false;

  price = Math.ceil(Math.random() * 200) + 95;
  rating = Math.random() * 5
  numRatings = Math.ceil(Math.random() * 360);

  listing.name = title;
  listing.listingType = listingType;
  listing.numBeds = numBeds;
  listing.verified = verified;
  listing.price = price;
  listing.rating = rating;
  listing.numRatings = numRatings;
  listing.pictures = [];

  var picGroup = Math.ceil(Math.random() * 6);
  for (let p = 1; p <= 9; p++) {
    listing.pictures.push(`./pictures/${picGroup}/${p}.jpg`);
  }

  mockData.push(listing);
}

Listing.create(mockData).then(() => db.disconnect());