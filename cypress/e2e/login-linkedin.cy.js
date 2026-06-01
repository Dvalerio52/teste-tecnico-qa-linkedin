describe('Funcionalidade: Login no LinkedIn', () => {

  beforeEach(() => {
    // Visita a página oficial de login do LinkedIn antes de cada teste
    // Usamos uma URL limpa para evitar bloqueios de segurança iniciais
    cy.visit('https://www.linkedin.com/login/pt');
  });

  it('CT01 - Deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
    // Insere um e-mail com formato válido, mas não cadastrado
    cy.get('#username').type('qa.teste.automacao.2026@gmail.com');
    
    // Insere uma senha incorreta qualquer
    cy.get('#password').type('SenhaIncorreta123!');
    
    // Clica no botão de entrar
    cy.get('.btn__primary--large').click();
    
    // Validação: Garante que o LinkedIn barrou o acesso e exibiu o alerta de erro
    // O id '#error-for-username' ou o alerta de segurança deve ficar visível
    cy.get('#error-for-username').should('be.visible');
  });

  it('CT02 - Deve validar a obrigatoriedade dos campos de preenchimento', () => {
    // Tenta clicar no botão de login sem preencher e-mail nem senha
    cy.get('.btn__primary--large').click();

    // Validação: O sistema deve exigir que o usuário digite as informações
    cy.get('#error-for-username').should('be.visible')
      .and('contain.text', 'Insira um e-mail ou número de telefone válido');
  });

});
