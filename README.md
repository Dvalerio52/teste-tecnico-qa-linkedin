# Avaliação Técnica - Automação de Testes (QA)

Este repositório contém o planejamento completo, a documentação e os testes automatizados utilizando **Cypress** e integração contínua (CI/CD) via **GitHub Actions** para o fluxo de autenticação da plataforma LinkedIn.

---

## 1. Escolha do Site e Justificativa
* **Site Escolhido:** [LinkedIn (Tela de Login)](https://www.linkedin.com/login/pt)
* **Fluxo:** Validação de credenciais e obrigatoriedade de campos no formulário de acesso.
* **Justificativa:** A tela de autenticação é uma das principais portas de entrada e segurança de uma plataforma. Testar cenários negativos e restrições de campos garante que regras de negócio cruciais de segurança estejam funcionando antes do acesso ao sistema.

---

## 2. História do Usuário 

**US - Autenticação na Plataforma**
> **Como um** usuário da plataforma do LinkedIn,
> **Quero** tentar realizar o login utilizando dados de acesso,
> **Para que** o sistema valide minhas informações de segurança e restrinja acessos indevidos.

---

## 3. Critérios de Aceite 

**Cenário 1: Tentativa de login com credenciais inválidas**
* **Dado que** estou na página de login do LinkedIn
* **Quando** insiro um e-mail válido mas não cadastrado
* **E** digito uma senha incorreta
* **E** clico no botão de entrar
* **Então** o sistema deve reter o acesso e exibir um alerta de erro de credenciais.

**Cenário 2: Validação de campos obrigatórios**
* **Dado que** estou na página de login do LinkedIn
* **Quando** clico diretamente no botão de entrar sem preencher os campos
* **Então** o sistema deve exibir mensagens de obrigatoriedade informando que o e-mail ou número de telefone é inválido.

---

## 4. Casos de Teste (Cenários Automatizados)

| ID | Cenário | Passos | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| **CT01** | Login com credenciais inválidas | 1. Acessar a URL de login.<br>2. Digitar e-mail inválido.<br>3. Digitar senha incorreta.<br>4. Clicar em Entrar. | Mensagem de erro visível na tela barrando o acesso. |
| **CT02** | Validação de campos em branco | 1. Acessar a URL de login.<br>2. Clicar direto em Entrar sem preencher nada. | Alerta indicando a necessidade de inserir um e-mail válido. |

---

## 5. Estimativa de Tempo de Teste 

Para calcular o tempo estimado de entrega de forma técnica, foi utilizada a fórmula estatística de **Três Pontos (PERT)**:

* **Otimista (O):** 2 horas (Ambiente estável, escrita direta dos cenários e pipeline executando sem interrupções).
* **Pessimista (P):** 6 horas (Eventuais bloqueios de segurança por automação em ambiente real ou ajustes complexos de ambiente na nuvem).
* **Mais Provável (M):** 3 horas (Tempo médio padrão para mapear elementos, codificar as validações e estruturar os logs).

$$\text{Fórmula PERT} = \frac{O + 4M + P}{6}$$

$$\text{Cálculo} = \frac{2 + 4(3) + 6}{6} = \frac{20}{6} \approx 3.33 \text{ horas}$$

* **Estimativa de Entrega Final:** **3 horas e 20 minutos**.

---

## 6. Estrutura do Projeto e CI/CD (GitHub Actions)

* **Framework:** Cypress 13+
* **Pipeline de CI:** Configurada via GitHub Actions (`.github/workflows/main.yml`) executando em modo *headless* utilizando o Google Chrome a cada alteração na branch principal (`main`/`master`).

> **⚠️ Nota Técnica sobre Execução em Nuvem:**
> Plataformas de alta segurança em produção (como o LinkedIn) utilizam mecanismos complexos de proteção contra acessos automatizados (mecanismos anti-bot/CAPTCHA). Caso a esteira de CI/CD venha a falhar por desafios visuais de validação humana impostos pelo servidor deles durante o tempo de execução na nuvem do GitHub, isto atesta o correto comportamento defensivo de segurança do site inspecionado.

---

## 7. Como Executar Localmente

Caso queira clonar o repositório e rodar os testes localmente com a interface gráfica, execute os comandos abaixo no terminal da pasta do seu projeto:

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Abrir o painel visual do Cypress
npx cypress open

# 3. Executar os testes em modo headless via terminal
npx cypress run --browser chrome
