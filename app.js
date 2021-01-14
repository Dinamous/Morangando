const dotenv = require("dotenv");
const express = require("express");
const AdminBro = require('admin-bro')

const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelizejs');
const { authenticate, sessionStorage } = require('./admin/util')

//pacote necessário para que o
// app entenda as variaveis de ambiente
dotenv.config();

//Adapter utilizado foi o Sequelize dentre (Firebase,TypeORM,Mongoose)
AdminBro.registerAdapter(AdminBroSequelize);

//Utilização das configurações a parte do adminBro
const adminBro = require('./admin');
const PORT = 3000;

const app = express();
const passport = require('passport')
const session = require('express-session')


//Configurações do Passaport
// app.use(session({
//    secret: 'keyboard cat',
//    resave: true,
//    saveUninitialized:true
//   }
// )); 
// app.use(passport.initialize());
// app.use(passport.session()); 
// armazenar infomações de login


const router = AdminBroExpress.buildAuthenticatedRouter(adminBro,
  {
    cookieName: 'admin-bro',
    cookiePassword: 'meudeusdoceupalamordedeusmeajdua',
    authenticate
  }, null,
  {
    resave: false,
    saveUninitialized: true,
    //store: sessionStore
  })


//configurações do bodyParser, para uma melhor leitura JSON
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


app.use(adminBro.options.rootPath, router);

if (process.env.NODE_ENV == "production") {
  app.listen(process.env.PORT, () => {
    console.log(`PROD = Server is listening on port: ${process.env.PORT}`);
  });
} else {
  app.listen(3000, () => {
    console.log(`DEV = Server is listening on port: ${PORT}`);
  });
}