const database = require ('./../connection/database')



async function Insert(data) {
    const { nome, categoria_id, valor } = data;

    const sql = `
        INSERT INTO tb_produto (nome, categoria_id, valor)
        VALUES('${nome}', '${categoria_id}', '${valor}')
    `;

    await database.execute(sql);
}

async function All(){

    let dados = await database.execute(`
        SELECT
         tb_produto.*,
         tb_categoria.nome AS categoria 
         FROM 
         tb_produto INNER JOIN tb_categoria 
         ON tb_produto.categoria_id = tb_categoria.id
         ORDER BY tb_produto.id`);

    return dados     

}

async function Find(id) {
    let dados = await database.execute(`
        SELECT * FROM tb_produto WHERE id=${id}
    `);

    return dados[0]; //retorna o unico que encontrou 
}

async function Remove(id){
    
       
    
        await database.execute(`DELETE FROM tb_produto WHERE id=${id}`);

      
}

async function Update(nome, valor, categoria_id,id){
    
        let sql = `
            UPDATE tb_produto SET
                nome      = '${nome}',
                categoria_id = '${categoria_id}',
                valor     = '${valor}'
            WHERE id=${id}    
        `;
    
        await database.execute(sql);
}

module.exports ={
    Insert,
    All,
    Find,
    Remove,
    Update
}