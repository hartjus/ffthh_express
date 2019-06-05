# Axian First Friday Tech Happy Hour - Node/Express Web Services

An exercise that shows how to stand up a NodeJS/Express web service, that uses Sequelize ORM and PassportJS (JWT) for authentication.

## Setup
After you clone the repository, run:

```sh
> npm install -g sequelize-cli express express-generator
> npm install
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
