# E-shop dashboard

#### Setup mongodb for this repo

- Follow instructions here https://levelup.gitconnected.com/how-to-install-mongodb-database-on-local-environment-19a8a76f1b92

- Install MongoDB Compass local client https://www.mongodb.com/try/download/compass

- Create a user and password for later authentication - STOP AFTER STEP 3 - https://medium.com/mongoaudit/how-to-enable-authentication-on-mongodb-b9e8a924efac

- In MongoDB Compass, on new connection screen - choose `Fill in connection fields individually`

- Connect to a database

- Make sure authentication is set to username / password

- Create a database

- Add or update the following variables with the values you set, in the .env file:

`MONGO_HOST=`
`MONGO_DB=`
`MONGO_USER=`
`MONGO_PASSWORD=`

---

#### How to run this repo

`$ npm install`

- after that add this two variable in env file.
  `PORT=`
  `NODE_ENV=`

`$ npm start`

### API endpoint

##### Orders API endpoint:

- https://e-shop-dashboard.herokuapp.com/api/orders (get orders)
- https://e-shop-dashboard.herokuapp.com/api/orders (post orders)

##### Customers API endpoint:

- https://e-shop-dashboard.herokuapp.com/api/customers (get customers)
- https://e-shop-dashboard.herokuapp.com/api/customers (post customers)

##### Employees API endpoint:

- https://e-shop-dashboard.herokuapp.com/api/employees (get customers)
- https://e-shop-dashboard.herokuapp.com/api/employees (post customers)

# Deployment

This application is hosted on Heroku Server.

### First Create a App in Heroku

`npm install -g heroku`

`heroku login`

`heroku git:clone -a ${project name}`

`cd ~/project`

`git add .`

`git commit -m "first commit"`

`git push heroku master`

- after the deployment of the project add env variable in heroku.

<img alt="GIF" src="https://i.ibb.co/5vpW4vs/Screenshot-from-2022-07-20-21-21-37.png" width="full" height="350" />

<img alt="GIF" src="https://i.ibb.co/sCD642t/Screenshot-from-2022-07-20-21-33-39.png" width="full" height="350" />
