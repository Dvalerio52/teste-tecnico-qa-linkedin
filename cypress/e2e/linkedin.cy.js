describe('Avaliação Técnica - Fluxos do LinkedIn', () => {

  it('CT01 - Deve exibir erro ao tentar logar com senha inválida', () => {
    cy.visit('https://www.linkedin.com/login');

    cy.get('#username')
      .should('be.visible')
      .type('teste_qa_2026@gmail.com');

    cy.get('#password')
      .type('SenhaIncorreta123');

    cy.get('.btn__primary--large').click();

    // Valida se a mensagem de erro ou barreira de login aparece
    cy.get('#error-for-username, #login-error, [role="alert"]')
      .should('be.visible');
  });

  it('CT02 - Deve permitir interagir com a busca de vagas na página inicial', () => {
    cy.visit('https://www.linkedin.com');

    cy.get('input[name="keywords"]')
      .should('be.visible')
      .type('Analista de QA{enter}');

    cy.url().should('include', '/jobs/search');
  });
});
