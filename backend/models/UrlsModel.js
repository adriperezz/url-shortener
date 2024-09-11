const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    originalURL: { type: String, required: True },
    shortURL: { type: String, required: True },
    clicked: { type: Number, default: 0 },
  },
  { timestamps: True }
);

module.exports = mongoose.model('Url', urlSchema);
