# Folders Structure

```markdown

src/
│
├── application/
│   ├── services/                # Contém lógica de aplicação, como use cases e serviços
│   │   └── userService.js
│   └── dtos/                    # Objetos de Transferência de Dados (DTOs)
│       └── userDTO.js
│
├── domain/
│   ├── models/                  # Entidades do domínio
│   │   └── user.js
│   ├── repositories/            # Interfaces dos repositórios
│   │   └── userRepository.js
│   ├── services/                # Lógica de domínio e regras de negócios
│   │   └── userDomainService.js
│   └── value-objects/           # Objetos de valor do domínio
│       └── email.js
│
├── infrastructure/
│   ├── repositories/            # Implementações dos repositórios (acesso a dados)
│   │   └── userRepositoryImpl.js
│   ├── database/                # Configuração de banco de dados (ex: Prisma, TypeORM)
│   │   └── prisma.js
│   └── email-service/           # Implementação de serviços externos como email
│       └── emailService.js
│
├── interfaces/
│   ├── controllers/             # Controladores HTTP (controllers para rotas)
│   │   └── userController.js
│   └── routes/                  # Definição de rotas
│       └── userRoutes.js
│
├── shared/                      # Código compartilhado entre diferentes partes do sistema
│   ├── utils/                   # Funções auxiliares e utilitários
│   │   └── logger.js
│   └── errors/                  # Definição de erros personalizados
│       └── appError.js
│
├── config/                      # Arquivos de configuração do sistema
│   └── env.js
│
└── index.js                     # Ponto de entrada da aplicação (server)
```
