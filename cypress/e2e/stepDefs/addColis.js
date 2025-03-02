import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginelements from '../page_objects/loginElements';
import ajoutColisElem from '../page_objects/ajoutColisElem.js';


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

When(`I navigate to the add package page`, () => {
    cy.get(ajoutColisElem.btnAjout).click()
    cy.get(ajoutColisElem.quantVerif).should('contain', 'Quantité').should('be.visible') 
    
});

When(`I fill the form with valid data`, () => {

    cy.get(ajoutColisElem.quantiteInput).type('1')    
    cy.get(ajoutColisElem.nomObjetInput).type('Laptop')
    cy.get(ajoutColisElem.longeurInput).type('20')
    cy.get(ajoutColisElem.largeurInput).type('10')
    cy.get(ajoutColisElem.hauteurInput).type('5')
    cy.get(ajoutColisElem.poidsBtn).click()
    cy.get(ajoutColisElem.photoBtn).selectFile("C:/Users/benna/Pictures/Screenshots/tof.png")
    cy.get(ajoutColisElem.btnSuivant).click()
    cy.get(ajoutColisElem.villeDepart).eq(0).type('Manouba ')
    cy.get(ajoutColisElem.bizerte).eq(0).click()
    cy.get(ajoutColisElem.villeArrivee).eq(1).type('Bizerte')
    cy.get(ajoutColisElem.mahdia).eq(0).click()
    cy.get(ajoutColisElem.dateDepart).click()
    cy.get(ajoutColisElem.dateDepart).type('2025-03-28')
    cy.get(ajoutColisElem.dateArrivee).type('2025-03-31')
    cy.get(ajoutColisElem.btnSuivant2).click()
    cy.get(ajoutColisElem.prixInput).type('45')
    cy.get(ajoutColisElem.btnSuivant2).click()
    
  });



Then(`I see the package added to the list`, () => {

    cy.get(ajoutColisElem.sucessAjout).should('contain', 'Votre annonce a été ajoutée avec succès !').should('be.visible')
    
});