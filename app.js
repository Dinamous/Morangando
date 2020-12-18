const express = require("express");
const AdminBro = require('admin-bro')

const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelizejs');
const { authenticate, sessionStorage } = require('./admin/util')

AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = require('./admin');
const PORT = 3000;
const app = express();

//session
// const session = require('express-session');
// const MySQLStore = require('express-mysql-session')(session);
// var options = {
//   host: 'root',
//   port: 3306,
//   user: 'db_user',
//   password: 'vertrigo',
//   database: 'database_development'
// };

// var sessionStore = new MySQLStore(options);

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro,
  {
    cookieName:'admin-bro',
    cookiePassword:'meudeusdoceupalamordedeusmeajdua',
    authenticate
  },null,
  {
    resave:false,
    saveUninitialized:true,
    // store: sessionStore
  })



app.use(adminBro.options.rootPath, router);
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});