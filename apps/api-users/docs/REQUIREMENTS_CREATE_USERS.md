# Criação de Novo Usuário

## RFs (Requisitos Funcionais)  

- [x] Deve ser possível criar um novo usuário no sistema via email e senha, fornecendo os seguintes dados: **firstName**, **lastName**, **email**, **username**, e **password**.
- [x] Deve ser possível validar a unicidade do **email** e do **username** durante o cadastro.  
- [x] Deve ser possível armazenar as informações do novo usuário no banco de dados.  

---

## RNs (Regras de Negócio)

- [x] O usuário não deve poder se cadastrar com um **email** ou **username** já existente no sistema:  
- [x] Caso o **email** já exista no sistema, deve retornar um erro informando já foi utilizado.  
- [x] Caso o **username** já exista no sistema, deve retornar um erro informando já foi utilizado.  
- [x] A senha do usuário deve ser uma senha forte: A senha deve conter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (@, $, !, %, *, ?, &).  
- [x] O campo **avatarUrl** será opcional e salvo como `null` caso não fornecido.
- [x] O campo **isSuperAdmin** durante a criação será sempre setado como false.
- [x] Se o valor do campo **isSuperAdmin** vier como true, lançar um "Unauthorized Error".

---

## RNFs (Requisitos Não Funcionais)

- [x] A senha do usuário precisa estar criptografada antes de ser armazenada no banco de dados.  
- [x] Os dados do sistema devem ser persistidos em um banco PostgreSQL.
