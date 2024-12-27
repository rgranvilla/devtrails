# Criação de Novo Usuário

## RFs (Requisitos Funcionais)  

- [ ] Deve ser possível criar um novo usuário no sistema:  
  - [ ] Via email e senha, fornecendo os seguintes dados: **firstName**, **lastName**, **email**, **username**, e **password**.  
  - [ ] Via OAuth (GitHub, Google ou Facebook), utilizando os dados retornados pelo provedor: **firstName**, **lastName**, **email**, e **avatarUrl** (se disponível).  
- [ ] Deve ser possível validar a unicidade do **email** e do **username** durante o cadastro.  
- [ ] Deve ser possível armazenar as informações do novo usuário no banco de dados.  

---

## RNs (Regras de Negócio)

- [ ] O usuário não deve poder se cadastrar com um **email** ou **username** já existente no sistema:  
  - [ ] Caso o **email** já exista no sistema:  
    - [ ] Para cadastro via credenciais (email e senha), o sistema deve retornar um erro informando que a conta já existe e solicitar que o usuário faça login.  
    - [ ] Para cadastro via OAuth, o sistema deve realizar automaticamente o login do usuário sem exibir mensagens.  
- [ ] A senha do usuário deve conter pelo menos 8 caracteres.  
- [ ] O campo **avatarUrl** será opcional e salvo como `null` caso não fornecido.  

---

## RNFs (Requisitos Não Funcionais)

- [ ] A senha do usuário precisa estar criptografada antes de ser armazenada no banco de dados.  
- [ ] Os dados do sistema devem ser persistidos em um banco PostgreSQL.  
- [ ] O processo de validação e criação deve ser eficiente, com um tempo de resposta de no máximo 2 segundos.  
- [ ] O sistema deve ser escalável, suportando múltiplas requisições simultâneas para criação de novos usuários.
