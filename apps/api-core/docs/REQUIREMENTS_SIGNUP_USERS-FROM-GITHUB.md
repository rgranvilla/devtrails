# Criação de Novo Usuário

## RFs (Requisitos Funcionais)  

- [ ] Deve ser possível criar um novo usuário no sistema via Github account.
- [ ] Deve ser possível validar a unicidade do **email** e do **username** durante o cadastro. 

---

## RNs (Regras de Negócio)

- [ ] Ao realizar o signup via Github account deve verificar a unicidade do **email** e do **username** no sistema.
- [ ] Deve verificar tanto o **email** quanto o **username** e se não existirem duplicidade nos dois permitir o cadastro no sistema.
- [ ] Caso o **username** já exista no sistema, deve solicitar ao usuário para escolher um novo username e salvar no banco.
- [ ] Caso o **email** já exista no sistema, o usuário deve avançar para o signin.
- [ ] Ao realizar o signup via Github account o campo password deve ser null.
- [ ] Caso o usuário já possua uma conta criada via **credentials**, prosseguir para o signin.  
- [ ] O campo **avatarUrl** será opcional e salvo como `null` caso não fornecido.

---

## RNFs (Requisitos Não Funcionais)

- [ ] Os dados do sistema devem ser persistidos em um banco PostgreSQL.
