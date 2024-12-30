# Edição de Usuário

## RFs (Requisitos Funcionais)  

- [x] Deve ser possível editar um usuário existente no sistema.
- [x] Deve ser possível editar os seguintes campos: **firstName**, **lastName**, **username**, **avatarUrl**.  
- [x] Deve ser possível remover um **avatarUrl**.
- [x] Não deve ser possível atualizar o campo **email**.

---

## RNs (Regras de Negócio)

- [ ] O usuário deve estar autenticado para alterar seus dados.
- [ ] Usuários Owner, Admin e SuperAdmin podem realizar alteração de dados de outros usuários. Outros perfís só podem alterar os dados de sua própria conta.
- [x] Caso o novo **username** já exista no sistema, deve retornar um erro informando que o **username** já foi utilizado.
- [x] O campo **avatarUrl** será opcional e salvo como `null` caso não fornecido.

---

## RNFs (Requisitos Não Funcionais)

- [x] Os dados do sistema devem ser persistidos em um banco PostgreSQL.
