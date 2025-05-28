describe('RealBeans Frontend Tests', () => {
  const password = 'babaid'; // Pas aan als jouw dev-store wachtwoord anders is

  beforeEach(() => {
    cy.visit('https://r0996477-realbeans.myshopify.com/password');
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });

  it('Toont de homepage met introtekst', () => {
    cy.contains('Since 1801, RealBeans has roasted premium coffee');
  });

  it('Toont de About-pagina en inhoud', () => {
    cy.contains('About').click({ force: true });
    cy.contains('From a small Antwerp grocery');
  });

  it('Wijzigt volgorde van producten bij sortering op prijs', () => {
  cy.visit('https://r0996477-realbeans.myshopify.com/password');
  cy.get('input[type="password"]').type('babaid', { force: true });
  cy.get('button[type="submit"]').click();

  cy.visit('https://r0996477-realbeans.myshopify.com/collections/all');

  cy.contains('Sort by', { matchCase: false }).click({ force: true });
  cy.contains('Price, low to high', { matchCase: false }).click({ force: true });
});

  it('Toont producten op de homepage', () => {
    cy.contains('Roasted');
    cy.contains('Blended');
  });

  it('Toont detailpagina van een product', () => {
    cy.contains('Roasted').click({ force: true });
    cy.contains('Robusta');
    cy.contains('€40');
  });
});


