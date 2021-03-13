const express= require('express');
const router = express.Router();

const { getNews, createNews, getOneNews } = require('../controllers/news');

router.get('/news', getNews);
router.get('/news/:newsId', getOneNews ); // params ID -> :newsId
router.post('/create-news', createNews);

exports.router = router;