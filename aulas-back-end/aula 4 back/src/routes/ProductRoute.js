const Product = require('./../model/Product');
const app = require('express').Router();

//criando a rota de "buscar" (GET) produtos
app.get('/api/produtos', async (req, res) => {
    
    res.status(200);
    res.send(await Product.All());
});

app.get('/api/produtos/:id', async (req, res) => {

    let dados = await Product.Find(req.params.id);

    if (!dados) {
        res.status(404).send({
            error: "Categoria nao encontrada"
        });
        return;
    }

    res.send(dados);



});


app.delete('/api/produtos/:id', async (req, res) => {
    
await Product.Remove(req.params.id)
   

    res.status(204).send();
});

// app.use(express.json());
// TODO: retornar os dados que foram inseridos no banco
app.post('/api/produtos', async (req,res) => {

    await Product.Insert(req.body)

    res.status(201).send();
});

// TODO: permitir alterar apenas alguns valores caso queira
app.patch('/api/produtos/:id', async (req, res) => {
    let id = req.params.id;
    let {nome, valor, categoria_id} = req.body;

   await Product.Update(nome, valor, categoria_id, id)

    res.send();
});


module.exports = app;