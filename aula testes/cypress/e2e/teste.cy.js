describe('testar a pesquisa do google', ()=>{

    it('Garantir que a busca por php com rapadura funciona',()=>{
        cy.visit('https://duckduckgo.com');

        cy.get('[name="q"]').type('php com rapadura');

        cy.get('[name="q"]').type('{enter}');

        cy.wait(500);

        cy.contains('phpcomrapadura.org');

        cy.contains('A comunidade').click()

    })


});