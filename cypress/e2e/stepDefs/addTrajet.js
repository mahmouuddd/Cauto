import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addTrajetElem from '../page_objects/addTrajetElem.js';

beforeEach(() => {
    cy.intercept('POST','/t_trajets').as('addRoute')
    });

Given(`I navigate to the add trajet page`, () => {

    cy.get(addTrajetElem.btnTrajet).click()
    cy.get(addTrajetElem.navTrajet).should('be.visible')
    
});

Given(`I fill in the form with valid data`, () => {

    cy.get(addTrajetElem.villeDepart).eq(0).type('Manouba ')
    cy.get(addTrajetElem.click1).eq(0).click()
    cy.get(addTrajetElem.villeDepart).eq(1).type('Ariana ')
    cy.get(addTrajetElem.click2).eq(0).click()
    
    cy.get(addTrajetElem.dateDepart).eq(0).type('2025-03-30')
    cy.get(addTrajetElem.dateArrivee).eq(1).type('2025-03-31')
    cy.get(addTrajetElem.transport).click()
    cy.get(addTrajetElem.longeur).type('20')
    cy.get(addTrajetElem.largeur).type('10')
    cy.get(addTrajetElem.hauteur).type('5')
    cy.get(addTrajetElem.poids).click()
    cy.get(addTrajetElem.jour).click()
    cy.get(addTrajetElem.jour2).click()
    cy.get(addTrajetElem.dMain).click()
    cy.get(addTrajetElem.dRelais).click()
    cy.get(addTrajetElem.aMain).click()
    cy.get(addTrajetElem.aRelais).click()
    cy.get(addTrajetElem.btnSbmit).click()

});

Then(`I see the trajet added to the list`, () => {

    cy.wait('@addRoute').then((interception) => {
        expect(interception.response.statusCode).to.eq(201)
    });

    //cy.get(addTrajetElem.btnVoirTrajet).click()
    //cy.get(addTrajetElem.navVoirTrajet).should('be.visible')
   // cy.get(addTrajetElem.sucessAjout).should('contain', 'Tunisia').and('contain' , '20 x 20 x 20 cm').should('be.visible')
    
});