const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  herokuId: String,
  accessToken: String
});

mongoose.model('users', userSchema);
