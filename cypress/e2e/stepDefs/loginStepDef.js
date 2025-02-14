import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginelements from '../page_objects/loginElements';


Given(`I visit the login page`, () => {
    cy.visit(loginelements.loginURL)
    cy.get(loginelements.titlecnx).should('contain', 'Connexion').should('be.visible')
});

When(`I enter valid credentials`, () => {
    cy.get(loginelements.email).type('particulier@gmail.com')
    cy.get(loginelements.password).type('0000')
    cy.get(loginelements.sumbit).click()
});

Then(`I should see the dashboard`, () => {
    cy.get(loginelements.menuMonCompte).should('contain', 'Mon compte').should('be.visible')
});

When(`I enter invalid credentials`, () => {
    cy.get(loginelements.email).type('particulier@gmail.com')
    cy.get(loginelements.password).type('123')
    cy.get(loginelements.sumbit).click()
});

Then(`I should see an error message`, () => {
    cy.get(loginelements.alert).should('contain', 'Mot de passe incorrect.').should('be.visible')
    
});

