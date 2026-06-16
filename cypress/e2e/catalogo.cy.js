/// <reference types= "cypress"/>
describe('Funcionalidade: catalago de livros', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });
    
    it('deve clicar no botao adicionar a cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', 1)
    })
    it('deve clicar em todos os botoes adicionar a cesta', ()=> {
        cy.get('.btn-primary').click({multiple: true})

    })
    it('deve clicar no primeiro botao adicionas a cesta', () => {
        cy.get('.btn-primary').first().click()
    })
    it('deve clicar no ultimo botao adicionar alista', () =>{
        cy.get('.btn-primary').last().click()
    })
    it('deve clicar no terceiro botao adicionar a cesta', () => {
        cy.get('.btn-primary').eq(2).click()
        cy.get('#global-alert-container').should('contain', 'A Divina Comédia')
        
    })
    it.only('deve clicar no nome do livro e direcionar para a tela do livro', () => {
        cy.contains('Dom Casmurro').click()
        
    });

});