/// <reference types="cypress" />


context('Compra', () => {
    it('Compras - Simples ', () => {
        cy.visit('/');

        cy.get('div[class^="login"]').should('contain.text', 'Olá, Entre ');

        //Pesquisando o produto
        cy.get('.inputPesquisa').type('ração');
        cy.get('.button-search').click();

        cy.wait(1000);

        // Escolhendo o produto
        cy.get('[class$="nomeCategoria"]').should('contain.text', 'resultados para "ração"');
        cy.get('a[data-idproduto="71805"]').click();
        
        //Adicionando o produto no carrinho de compras
        cy.get('button[class$="btn-redondo-verde"]').click();

        //Validando se o produto está na tela Meu Carrinho
        cy.get('th[class="minha-sacola"]').should('contain.text', 'Meu Carrinho');

        //Validação do produto no carrinho
        cy.get('td[class="td-resumo"]').should('contain.text', 'Ração Royal Canin Maxi - Cães Adultos - 15kg - 15kg');

        //Validação da Quantidade
        cy.get('input[value="1"]').should('contain.value', '1');

        //Validação do Valor Total
        cy.get('td[class="total"]').should('contain.text', 'R$ 249,19');
        cy.screenshot();

    });
      
});
