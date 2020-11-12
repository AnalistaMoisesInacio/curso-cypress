/// <reference types="cypress"/>

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
        cy.get('span').should('contain', 'Cuidado')
    })

    it('Link', () => {

        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text','Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')
    })

    it('TextFilds', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value','Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
           .type('textarea Testando')
           .should('have.value','textarea Testando')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
          .type('Testando')

        cy.get('[data-cy=dataSobrenome]')
          .type('Teste12345{backspace}{backspace}')
          .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
           .clear()
           .type('Erro{selectall}acerto',{ delay:100 })
           .should('have.value','acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
           .click()
           .should('be.checked')

        cy.get('#formSexoMasc')
          .should('not.be.checked')
    })

    it('CheckBox', () => {
        cy.get('#formComidaPizza')
           .click()
           .should('be.checked')
          
        cy.get('[name=formComidaFavorita]')
           .click({multiple: true})
        cy.get('#formComidaPizza')
           .should('not.be.checked')
    })

    it('Combo', () =>{
        cy.get('[data-test=dataEscolaridade]')
          .select('2o grau completo')
          .should('have.value','2graucomp')

        cy.get('[data-test=dataEscolaridade]')
          .select('superior')
          .should('have.value','superior')
        //TODO Validar as opções do combo
    })

    it.only('Combo Multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
          .select(['natacao','Corrida','nada'])

          //TODO Validar opções selecionados do combo multiplo
    })
})