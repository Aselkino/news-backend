const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { router } = require('./routes/api')

app.use(bodyParser.json());
app.use(router)

const PORT = 7979; // 3000-8666



app.listen(PORT, () => {
    console.log(`Приложение запущено на ${PORT} порту`);
});