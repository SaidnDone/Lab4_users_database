const mongoose = require('mongoose');

const geoSchema = new mongoose.Schema({
  lat: String,
  lng: String,
});

const addressSchema = new mongoose.Schema({
  street: String,
  suite: String,
  city: String,
  zipcode: String,
  geo: geoSchema,
});

const companySchema = new mongoose.Schema({
  name: String,
  catchPhrase: String,
  bs: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  address: addressSchema,
  phone: {
    type: String,
    required: true,
    match: /^1-\d{3}-\d{3}-\d{4}$/,
  },
  website: {
    type: String,
    required: true,
    match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
  },
  company: companySchema,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
