type LenderFixture = {
  initialValues: {
    first_name?: string;
    last_name?: string;
    email?: string;
    monthly_income?: string;
    date_of_birth?: string;
    gender?: string;
    address?: string;
  };
  name: string;
  slug: string;
};

context('Home Page', () => {
  before(() => {
    cy.fixture('lenders').then((lenders: LenderFixture) => {
      this.lenders = lenders;
    });
  });

  beforeEach(() => {
    const host = Cypress.config()['host'];
    cy.visit(host);
  });

  it('will check if all important elements are in place:', () => {
    // Names and links for each bank should be visible for the user:
    this.lenders.forEach((lender) => {
      cy.get(`[data-testid="${lender.slug}"]`)
        .should('be.visible')
        .should('contain', lender.name);
    });
  });

  it('will check if all important links are in place and take the user to correct URL', () => {
    // Names and links for each bank should be visible for the user:
    this.lenders.forEach((lender) => {
      cy.get(`[data-testid="${lender.slug}"]`)
        .should('be.visible')
        .should('contain', lender.name)
        .should('have.attr', 'href');
    });
  });
});
