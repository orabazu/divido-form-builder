import getLenders from '../fixtures/lenders';

context('Home Page', () => {
  let lenders = null;
  before(() => {
    lenders = getLenders();
  });

  beforeEach(() => {
    const url = Cypress.env('host');
    cy.visit(url);
  });

  it('will check if all important elements are in place:', () => {
    // Names and links for each bank should be visible for the user:
    lenders.forEach((lender) => {
      cy.get(`[data-testid="${lender.slug}"]`)
        .should('be.visible')
        .should('contain', lender.name);
    });
  });

  it('will check if all important links are in place and take the user to correct URL', () => {
    // Names and links for each bank should be visible for the user:
    lenders.forEach((lender) => {
      cy.get(`[data-testid="${lender.slug}"]`)
        .should('be.visible')
        .should('contain', lender.name);
    });

    cy.get(`[data-testid="${lenders[0].slug}"]`).click();
    cy.location('pathname').should('be', `/${lenders[0].slug}`);
    cy.go('back');

    cy.get(`[data-testid="${lenders[1].slug}"]`).click();
    cy.location('pathname').should('be', `/${lenders[1].slug}`);
    cy.go('back');

    cy.get(`[data-testid="${lenders[2].slug}"]`).click();
    cy.location('pathname').should('be', `/${lenders[2].slug}`);
    cy.go('back');
  });
});
