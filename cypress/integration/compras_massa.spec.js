/// <reference types="cypress" />


context('Compra', () => {
    it('Compras com Massa de Testes - Produto 3', () => {
        cy.visit('/');

        cy.get('div[class^="login"]').should('contain.text', 'Olá, Entre ');

        //Pesquisa do produto através da massa de testes
        cy.fixture('produtos').then((user) => {
        cy.get('.inputPesquisa').type(user.produto3);            
        })

        //Pesquisando o produto
        cy.get('.button-search').click();

        //Validando o tipo de pesquisa
        cy.get('[class$="nomeCategoria"]').should('contain.text', 'resultados para "coleira"');
        
        //Escolhendo o produto através do resultado
        cy.get('a[data-idproduto="151823"]').click();

        //Adicionando o produto no carrinho de compras
        cy.get('button[class$="btn-redondo-verde"]').click();

        //Validando se o produto está na tela Meu Carrinho
        cy.get('th[class="minha-sacola"]').should('contain.text', 'Meu Carrinho');

        //Validação do produto no carrinho
        cy.get('td[class="td-resumo"]').should('contain.text', 'Coleira Petz Azul para Gatos');

        //Validação da Quantidade
        cy.get('input[value="1"]').should('contain.value', '1');

        //Validação do Valor Total
        cy.get('td[class="total"]').should('contain.text', 'R$ 29,99');
        cy.screenshot();
    
    });


    it('Compras com Massa de Testes - Produto 1', () => {
        cy.visit('/');

        cy.get('div[class^="login"]').should('contain.text', 'Olá, Entre ');

        //Pesquisa do produto através da massa de testes
        cy.fixture('produtos').then((user) => {
        cy.get('.inputPesquisa').type(user.produto1);            
        })

        //Pesquisando o produto
        cy.get('.button-search').click();

        //Validando o tipo de pesquisa
        cy.get('[class$="nomeCategoria"]').should('contain.text', 'resultados para "tapete"');
        
        //Escolhendo o produto através do resultado
        cy.get('a[data-idproduto="162342"]').click();

        //Adicionando o produto no carrinho de compras
        cy.get('button[class$="btn-redondo-verde"]').click();

        //Validando se o produto está na tela Meu Carrinho
        cy.get('th[class="minha-sacola"]').should('contain.text', 'Meu Carrinho');

        //Validação do produto no carrinho
        cy.get('td[class="td-resumo"]').should('contain.text', 'Tapete Petz Limpa Patas para Gatos');

        //Validação da Quantidade
        cy.get('input[value="1"]').should('contain.value', '1');

        //Validação do Valor Total
        cy.get('td[class="total"]').should('contain.text', 'R$ 59,99');
        cy.screenshot();
    });
    

    it('Compras com Massa de Testes - Produto 8', () => {
        cy.visit('/');

        cy.get('div[class^="login"]').should('contain.text', 'Olá, Entre ');

        //Pesquisa do produto através da massa de testes
        cy.fixture('produtos').then((user) => {
        cy.get('.inputPesquisa').type(user.produto8);            
        })

        //Pesquisando o produto
        cy.get('.button-search').click();

        //Validando o tipo de pesquisa
        cy.get('[class$="nomeCategoria"]').should('contain.text', 'resultados para "snack"');
        
        //Escolhendo o produto através do resultado
        cy.get('a[data-idproduto="154716"]').click();

        //Adicionando o produto no carrinho de compras
        cy.get('button[class$="btn-redondo-verde"]').click();

        //Validando se o produto está na tela Meu Carrinho
        cy.get('th[class="minha-sacola"]').should('contain.text', 'Meu Carrinho');

        //Validação do produto no carrinho
        cy.get('td[class="td-resumo"]').should('contain.text', 'Snack Petz Acerola, Graviola e Banana para Cães');

        //Validação da Quantidade
        cy.get('input[value="1"]').should('contain.value', '1');

        //Validação do Valor Total
        cy.get('td[class="total"]').should('contain.text', 'R$ 5,99');
        cy.screenshot();
    });
});