// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const model = mongoose.model;

// const userSchema = Schema({
//   name: {
//     type: String,
//     required:true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: Number,
//     required:true
//   },
//   aadhar: {
//     type: Number,
//     required:true
//   },
//   pan: {
//     type: String,
//     required:true
//   },
//   bank: {
//     type: Number,
//     required:true
//   },
//   ifsc: {
//     type: String,
//     required:true
//   },
//   gst: {
//     type: String,
//     required:true
//   },
//   pincode: {
//     type: Number,
//     required:true
//   },
// });

// const User = model('users', userSchema);

// module.exports = User;




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: Number,
    unique: true,
    sparse: true,
  },
  phoneVerified: {
    type: Boolean,
    default: false,
  },
  aadhar: {
    type: Number,
    unique: true,
    sparse: true,
  },
  aadharVerified: {
    type: Boolean,
    default: false,
  },
  pan: {
    type: String,
    unique: true,
    sparse: true,
  },
  panVerified: {
    type: Boolean,
    default: false,
  },
  bank: {
    type: Number,
    unique: true,
    sparse: true,
  },
  bankVerified: {
    type: Boolean,
    default: false,
  },
  ifsc: {
    type: String,
  },
  gst: {
    type: String,
    unique: true,
    sparse: true,
  },
  gstVerified: {
    type: Boolean,
    default: false,
  },
  pincode: {
    type: Number,
  },
  addressVerified: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const User = model('User', userSchema);

module.exports = User;
