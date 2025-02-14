import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import annonceElem from '../page_objects/annonceElem.js';


beforeEach(() => {
    cy.intercept('GET','/trajets?page=1&filter[from_address][name]=&filter[to_address][name]=').as('Annonce')
    cy.intercept('GET','https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true').as('googlemap')
    });

Given(`I navigate to the annonces page`, () => {
    cy.get(annonceElem.btnAnnonce).click()
    cy.get(annonceElem.navAnnonce).should('be.visible')
});

Given(`I see the list of annonces`, () => {
    cy.get(annonceElem.annonce1).should('be.visible').should('contain','Smartphone')
});

Then(`I should see the details of the annonce`, () => {

    //cy.request('GET', 'https://api.colispo.com/colis/trajet?trajet*').its('status').should('eq', 200)

    cy.get(annonceElem.sidebar).should('contain.html', 'col')
    cy.wait(2000)
    cy.wait('@Annonce').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
   });

    cy.wait('@googlemap').then((interception) => {
    expect(interception.response.statusCode).to.eq(200)
       cy.screenshot('annonce_details')
   });
    
    


    
    
});