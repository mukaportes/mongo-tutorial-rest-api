# mongo-tutorial-rest-api

0. Infra Setup
- create a new node.js instance on heroku
- create a mongodb instance on mlab -- heroku add-on

1. Initial Setup
- npm init to create the project
- install basic rest api dependencies *express*, *body-parser*, *cors*, *mongoose*
- install some helpful devDependencies *nodemon*, *dotenv*
- create .env with environment variables

2. Setting up express app
- create config file with db credentials
- create db loader
- create data-handlers loader
- create simple start express app + index.js

3. Register User
- create simple initial controller [responding OK]
- create User Entity
- create User Mongoose Model
- create a service to hold all business logic
- add business logic to service
- add service to controller responding what the service
- a
