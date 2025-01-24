function navbar() {
    return `
    <nav>

    <button onClick="alterarConteudo('inicio')" class="btn btn-outline-primary"> inicio </button>
    <button onClick="alterarConteudo('listar')" class="btn btn-outline-primary"> listar </button>
    <button onClick="alterarConteudo('cadastrar')" class="btn btn-outline-primary"> cadastrar </button>
    <button onClick="alterarConteudo('config')" class="btn btn-outline-primary"> configurações </button>
    
    </nav>
    `
}