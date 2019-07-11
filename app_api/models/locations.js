const mongoose = require('mongoose');

const openingTimesSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true
  },
  opening: String,
  closing: String,
  closed: {
    type: Boolean,
    required: true
  }
});

const reviewSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    'default': Date.now
  }
});

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageURL: String,
  description: {
    type: String,
  },
  flavors: {
    type: [String]
  }
});

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  coords: {
    type: {type: String},
    coordinates: [Number]
  },
  openingTimes: [openingTimesSchema],
  imageURL: String,
  menu: [menuItemSchema],
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  reviews: [reviewSchema],
  bobaQualities: [String]
});
locationSchema.index({coords: '2dsphere'});

mongoose.model('Location', locationSchema);