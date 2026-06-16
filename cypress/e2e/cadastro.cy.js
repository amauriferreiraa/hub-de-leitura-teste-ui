/// <reference types= "cypress"/>
import { faker } from '@faker-js/faker';
describe('', () => {
    beforeEach(() => {
        cy.visit('register.html')
    });

    it('dever fazer cadastro com sucesso, usando funcao js', ()=>{
        let email = `teste${Date.now()}@teste.com`

        cy.get('#name').type('Amauri Ferreira')
        cy.get('#email').type(email)
        cy.get('#phone').type('11987654321')
        cy.get('#password').type('teste@123')
        cy.get('#confirm-password').type('teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()

        //Resultatdo
        cy.url().should('include', 'dashboard')

    })
    it('dever fazer cadastro com sucesso,  usando faker', ()=>{
        let nome = faker.person.fullName()
        let email = faker.internet.email()

        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11987654321')
        cy.get('#password').type('teste@123')
        cy.get('#confirm-password').type('teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()

        //Resultatdo
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)

    })
});