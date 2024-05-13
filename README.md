Esse projeto é relacionado ao primeiro desafio do PB da Compass

Projeto VetClinic

Obrigatórios

- Banco de dados SQLite
- ORM Sequelize
- Gravar apresentação individual com o código rodando na própria máquina (enviar até a data limite de entrega)
- Convetional Commits

Adicionais que serão utilizados

- Utilizar Typescript
- ORM TypeORM 
- Eslint e prettier

Requisitos 

Crie uma API REST seguindo os padrões solicitados:

[] - GET /tutors -> Liste todos os tutores
[] - POST/tutor -> Crie um novo tutor
[] - PUT/tutor/:id -> Atualiza um tutor existente
[] - DELETE/tutor/:id -> Deleta um tutor
[] - POST/pet/:tutorId-> Cria um pet e adiciona um tutor a ele
[] - PUT/pet/:petId/tutor/:tutorId -> Atualiza a informação de um pet
[] - DELETE/pet/:petId/tutor/:tutorId -> Deleta um pet de um tutor 

Observações 

- Um tutor pode ter vários pets, mas um pet pode ter apenas um tutor