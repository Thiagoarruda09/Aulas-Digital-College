const database = require ('./../connection/database')

async function Insert(){
    //insert 
}

async function All(){
    let dados = await database.execute ('SELECT * FROM tb_categoria')

    return dados
}

async function Find(id) {
    let dados = await database.execute(`
        SELECT * FROM tb_categoria WHERE id=${id}
    `);

    return dados[0]; //retorna o unico que encontrou 
}

async function Remove(id){
    
       
    
        await database.execute(`DELETE FROM tb_categoria WHERE id=${id}`);

      
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