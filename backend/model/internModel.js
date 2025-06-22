const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  paymentScript: { type: String, required: true }, // Updated to store the payment HTML script
  description: { type: String, required: true }, // Added description field
});

const Internship = mongoose.model('Internship', internshipSchema);

module.exports = Internship;
