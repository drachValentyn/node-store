const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  login: String,
  email: String,
  role: { type: String, default: 'Subscriber' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
