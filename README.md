# Axian First Friday Tech Happy Hour - Node/Express Web Services

An exercise that shows how to stand up a NodeJS/Express web service, that uses Sequelize ORM and PassportJS (JWT) for authentication.

## Setup
This project requires Docker/Docker-compose.

After you clone the repository, run:

terminal 1
```sh
> docker-compose up
```

Adminer is available at http://localhost:8080

terminal 2
```sh
# install deps
> npm install -g sequelize-cli express express-generator
> npm install

# Setup database
> sequelize db:migration
> sequelize db:seed:all
```

## Running 

```sh
> npm run start
```

http://localhost:3000

## Endpoints

GET http://localhost:3000/hero/:hero?name=:name
POST http://localhost:3000/auth/login
GET http://localhost:3000/users
