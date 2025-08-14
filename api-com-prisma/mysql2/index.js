const express = require('express')
const database = require ('./databse')

const app = express()

app.get('/usuarios/editar/:id', async(req, res) =>{
    await database.executar(`UPDATE FROM tb_usuarios SET nome='${req.query.nome}'
    email='${req.query.email}'
    WHERE id= ${req.params.id}`)

    let dados = await database.executar('SELECT * FROM tb_usuarios')

    res.send({
        "acao": "editar",
        "dados": dados
    })
})

app.get('/usuarios/cadastrar', async(req, res) =>{
    await database.executar(`
        INSERT INTO tb_usuarios (nome, email) VALUES ('${req.query.email}', '${req.query.email}')`)

        let dados = await database.executar('SELECT * FROM tb_usuarios')



    res.send({
        "acao": "editar",
        "dados": dados
    })
})

app.get('/usuarios/excluir/:id', async(req, res) =>{

    await database.executar(`
        DELETE FROM tb_usuarios
        WHERE id = ${req.params.id}`)

    let dados = await database.executar('SELECT * FROM tb_usuarios')    

    res.send({
        "acao": "editar",
        "dados": dados
    })
    
})

app.get('/usuarios/listar', async (req, res) =>{
        let dados = await database.executar('SELECT * FROM tb_usuarios')

    res.send({
        "acao": "editar",
        "dados": dados
    })
})

app.listen(8000,()=>{
    console.log('api de teste do mysql2')
})