const express = require('express');
const router = express.Router();

const url_controller = require('../controllers/UrlsControllers');

//URL ROUTES

router.get('/shorten', url_controller.createShortURL);
router.get('/:url', url_controller.getLongURL);
