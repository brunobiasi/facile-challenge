# Facile Challenge

# Sobre o projeto

O projeto é uma aplicação Back-end construida durante o processo seletivo, organizado pela [Facile Soluções em Sistemas](https://facilesistemas.net.br/ "Site da Facile").

A aplicação consiste em um encriptador de strings, onde os dados são coletados no padrão JSON enviados pelo cliente, depois são encriptados e armazenados em banco de dados. O cliente pode realizar consulta passando como parametro o id do registro, tendo como retorno a string desencriptada.

# Tecnologias utilizadas
## Back end
- NodeJS
- Express
- Sequelize
- AES-JS
## Banco de dados
- PostgreSQL

# Como executar o projeto - (Local)

## Back end
Pré-requisitos: NodeJS

```bash
# clonar repositório
git clone https://github.com/brunobiasi/facile-challenge.git

# entrar na pasta do projeto
cd facile-challenge

# instalar dependências
npm install

# configurar credenciais do banco de dados no arquivo src/config/database.js

# criar banco de dados
node_modules/.bin/sequelize db:create

# criar tabela de encripts
node_modules/.bin/sequelize db:migrate

# executar o projeto
npm start
```

## Banco de dados
Pré-requisitos: PostgreSQL

# Autor

Bruno Dâmaso de Biasi

https://www.linkedin.com/in/bruno-biasi-474271200/

