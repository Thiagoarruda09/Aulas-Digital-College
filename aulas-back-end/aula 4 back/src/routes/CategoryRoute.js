const Categoria = require('./../model/Categoria'); 
const app = require('express').Router();

//criando a rota de "buscar" (GET) produtos
app.get('/api/categoria', async (req, res) => {


    res.status(200);
    res.send(await Categoria.All());
});

app.get('/api/categoria/:id', async (req, res) => {
    let dados = await Categoria.Find(req.params.id)


    res.status(200);
    res.send(dados);
});

app.delete('/api/categoria/:id', async (req, res) => {
    
await Categoria.Remove(req.params.id)
   

    res.status(204).send();
});

module.exports = app

