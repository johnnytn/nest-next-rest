## Description

API created using [Nest](https://github.com/nestjs/nest), a well documented and robust framework to build a good and maintainable project. Utilizing good project structure, integrations and anotations to ease the development cycle.The database of choice was PotgresSQL for it's simplicity and practicality to use and setup a Docker container. The API documentation was provided using [Swagger](https://swagger.io/tools/swagger-editor/).

## Project Structure

Nest uses an structed similar to angular, so in general a module is made of:

```bash
controler -> service -> model
```

The main module is the `AppModule`, and it is where most of the project important config will go.
Inside of it we have the `TypeOrm` configuration for our DB (Postgres in this case), and the other modules like `Employee` and `Department` are set.

the `Controller` is where the router configuration will go:

Example (`Get` request `localhost/3000/department`):

```bash
  //get all departments
  @Get()
  async findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

```

The `Service` is where the magic and the business logic will go.

ex: `department.service`

the `Model` is where the definition of your enitity schema will go.

ex: `departament.entity.ts`

## Running with Container

The database and api will be created

```bash
$ docker-compose up
```

## Installation

```bash
$ npm install
or
$ yarn install

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```

## API Docs

Using Swagger for documentation at `localhost:port/api`
