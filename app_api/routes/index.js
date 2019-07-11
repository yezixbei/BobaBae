const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({ // triggers 401 error at the bottom of app.js
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');
const ctrlAuth = require('../controllers/authentication');

// locations
router
  .route('/locations')
  .get(ctrlLocations.locationsListByDistance) // home page
  .post(ctrlLocations.locationsCreate);

router
  .route('/locations/:locationid')
  .get(ctrlLocations.locationsReadOne) // locations page
  .put(ctrlLocations.locationsUpdateOne)
  .delete(ctrlLocations.locationsDeleteOne);

// reviews
router
  .route('/locations/:locationid/reviews')
  .post(auth, ctrlReviews.reviewsCreate); // used by locations page to write a new review

router
  .route('/locations/:locationid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);

  // authentication
router.post('/register', ctrlAuth.register); 
router.post('/login', ctrlAuth.login);

module.exports = router;