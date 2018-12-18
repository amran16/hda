const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  herokuId: String
});

mongoose.model('users', userSchema);
