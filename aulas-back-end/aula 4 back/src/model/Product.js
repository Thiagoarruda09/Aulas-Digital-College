const database = require ('./../connection/database')



async function Insert(req) {
    const { nome, categoria_id, valor } = req.body;

    const sql = `
        INSERT INTO tb_produto (nome, categoria_id, valor)
        VALUES('${nome}', '${categoria_id}', '${valor}')
    `;

    return sql;
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
        SELECT * FROM tb_categoria WHERE id=${id}
    `);

    return dados[0]; //retorna o unico que encontrou 
}

async function Remove(id){
    
       
    
        await database.execute(`DELETE FROM tb_produto WHERE id=${id}`);

      
}

async function Update(id){
       
    
        let {nome, valor, categoria_id} = req.body;
    
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