const { DATABASE_NEWS } = require('../database/db');

exports.getNews = async (request, response) => {
    try {
        const lang = (request.headers.language);  //en

        const filteredNews = DATABASE_NEWS.filter((n) => {
            return n.lang === lang;
        });

        console.log(filteredNews);


        response.status(202).json(filteredNews) //respons ispolnilsya uspeshno otpravlyaem otvet 200
    } catch (e) {
        response.status(500).json({
            message: e.message
        })
    }
}

exports.getOneNews = async (req, res) => {
    try {
        const news = DATABASE_NEWS.find(news => news.id === req.params.newsId);

        if (!news) {
            return res.status(404).json('Новость не найдено')
        }

        return res.status(200).json(news);
        
    } catch (e) {
        console.log(e.message);
        res.status(500).json('Сервер упал');
    }
}

exports.createNews = async (req, res) => {
    try {
        const news = req.body;
        news.date = new Date();

        DATABASE_NEWS.push(news);

console.log(news)
        res.status(201).json({
            message: 'Новость создана',
            allNews: DATABASE_NEWS
        });
    } catch (e) {
        
    }
}