const database = require ('./../connection/database')

async function Insert(){
    //insert 
}

async function All(){
    let dados = await database.execute ('SELECT * FROM tb_categoria')

    return dados
}

async function Find(){
}

async function Remove(){
    //insert
}

async function Update(){
    //insert
}

module.exports ={
    Insert,
    All,
    Find,
    Remove,
    Update
}