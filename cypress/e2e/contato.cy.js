

describe ('Funcionalidade: Contato', () => {
  beforeEach(() => {
    cy.visit('index.html')
  });

it ('Deve prencher formulario de contato co sucesso', () => {
  
  cy.get('#name').type('Amauri silva')
  cy.get('#email').type('amauri@hotmail')
  cy.get('#subject').select('Parcerias')
  cy.get('#message').type('teste de ui')
  cy.get('#btn-submit').click()
  
  cy.contains('Contato enviado com sucesso!').should('exist')

});

it('Deve validar mensagem de erro ao enviar sem preencher sem o nome', () => {
  
  cy.get('#name').clear()
  cy.get('#email').type('amauri@hotmail')
  cy.get('#subject').select('Parcerias')
  cy.get('#message').type('teste de ui')
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
});

it.only ('Deve validar mensagem de erro ao enviar sem preencher sem o Email', () => {
  
  cy.get('#name').type('Amauri Silva')
  cy.get('#email').clear()
  cy.get('#subject').select('Parcerias')
  cy.get('#message').type('teste de ui')
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
});

it ('Deve validar mensagem de erro ao enviar sem selecionar sem asssunto', () => {});

it (' Deve validar mensagem de erro ao enviar sem ', () => {})
})