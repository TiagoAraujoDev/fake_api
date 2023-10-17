# App

Find player two app

## RFs (Requisitos funcionais)

- [] Deve ser possível se cadastrar;
- [] Deve ser possível se autenticar(será que é realmente necessário colocar essa barreira para o usuário?);
- [] Deve ser possível obter o perfil de um usuário logado;
- [] Deve ser possível um usuário criar um convite para jogar;
- [] Deve ser possível listar todos os convites;

## RNs (Regras de negócio)

- [] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [] ;
## RNFs (Requisitos não-funcionais)

- [] A senha do usuário precisa estar criptografada;
- [] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [] O usuário deve ser identificado por um JWT (JSON Web Token);
