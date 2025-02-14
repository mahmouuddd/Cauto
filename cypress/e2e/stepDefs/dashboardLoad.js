import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginelements from '../page_objects/loginElements';
import dashElements from '../page_objects/dashElements';

Given(`I Login to the application`, () => {
    cy.visit(loginelements.loginURL)
    cy.get(loginelements.titlecnx).should('contain', 'Connexion').should('be.visible')
    cy.get(loginelements.email).type('particulier@gmail.com')
    cy.get(loginelements.password).type('0000')
    cy.get(loginelements.sumbit).click()
    
});

When(`I navigate to the dashboard`, () => {
    cy.get(loginelements.menuMonCompte).should('contain', 'Mon compte').should('be.visible')
    
});

Then(`I see the dashboard elements`, () => {

   
        cy.get(dashElements.container0).should('contain', 'Transporteur nécessaire ?').should('be.visible')
        cy.get(dashElements.container0).should('contain', 'Voulez-vous devenir transporteur ?').should('be.visible')
        cy.get(dashElements.container1).should('contain', 'Chercher une annonce').should('be.visible')
        cy.get(dashElements.container1).should('contain', 'Expédier votre colis').should('be.visible')
   
   

    
       cy.get(dashElements.container2).should('contain', 'Que vous soyez expéditeur ou').should('be.visible')
       cy.get(dashElements.container2).should('contain', 'Envoyer un colis avec Colispo').should('be.visible')
       cy.get(dashElements.container2).should('contain', 'En temps réel').should('be.visible')
   

  
       cy.get(dashElements.container3).should('contain', 'Prix négociables').should('be.visible')
       cy.get(dashElements.container3).should('contain', 'Service 24h/24').should('be.visible')
       cy.get(dashElements.container3).should('contain', 'Facile à utiliser').should('be.visible')
   

    
        cy.get(dashElements.container4).should('contain', 'Voir les dernières trajets').should('be.visible')
        cy.get(dashElements.container4).should('contain', 'Consultez les dernières voyages').should('be.visible')
    

    
        cy.get(dashElements.container5).should('contain', 'Qui sommes-nous?').should('be.visible')
        cy.get(dashElements.container5).should('contain', 'Pourquoi nous choisir ?').should('be.visible')
        cy.get(dashElements.container5).should('contain', 'Services').should('be.visible')
    
});