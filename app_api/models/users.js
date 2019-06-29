const mon = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mon.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

// schema methods have to be defined before the schema is compiled

// crypto.randomBytes, pbkdf2Sync
userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex'); 
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex'); // one way encryption
};

userSchema.methods.validPassword = function (password) {
  return this.hash === crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// jwt.sign
userSchema.methods.generateJwt = function () {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7); // expires 7 days from now
  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000, 10), // change from millisecond to seconds in UNIX time
    }, 
    process.env.JWT_SECRET
  );
};


mon.model('User', userSchema);