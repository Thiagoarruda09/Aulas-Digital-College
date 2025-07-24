const express = require('express');
const productRoute = require('./src/routes/ProductRoute');
const categoryRoute = require('./src/routes/CategoryRoute')

//iniciando o express
const app = express();

app.use(express.json());

//adicionando as rotas de produto ao express
app.use(productRoute);
app.use(categoryRoute)

//subindo o servidor
app.listen(8080, () => {
    console.log('API rodando no endereco http://localhost:8080');
});



//npx nodemon index.js
