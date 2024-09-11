const URL = require('../models/UrlsModel.js');
const { nanoid } = require('nanoid');
const asyncHandler = require('express-async-handler');

exports.createShortURL = asyncHandler(async (req, res) => {
  const { oldUrl } = req.body;
  const shortURL = nanoid(5);
  const newUrl = new URL(oldUrl, shortURL);

  try {
    await newUrl.save();
    res.json(newUrl);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

exports.getLongURL = asyncHandler(async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });

    if (url) {
      url.clicks++;
      await url.save();
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
