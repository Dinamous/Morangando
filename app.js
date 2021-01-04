const dotenv = require("dotenv");
const express = require("express");
const AdminBro = require('admin-bro')

const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroSequelize = require('admin-bro-sequelizejs');
const { authenticate, sessionStorage } = require('./admin/util')

dotenv.config();

AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = require('./admin');
const PORT = 3000;
const app = express();

//session
var session = require('express-session');
var MySQLStore = require('mysql-express-session')(session);

// var options = {
// 	host: 'localhost',// Host name for database connection.
// 	port: 3306,// Port number for database connection.
// 	user: 'session_test',// Database user.
// 	password: 'password',// Password for the above database user.
// 	database: 'session_test',// Database name.
// 	checkExpirationInterval: 900000,// How frequently expired sessions will be cleared; milliseconds.
// 	expiration: 86400000,// The maximum age of a valid session; milliseconds.
// 	createDatabaseTable: true,// Whether or not to create the sessions database table, if one does not already exist.
// 	schema: {
// 		tableName: 'sessions',
// 		columnNames: {
// 			session_id: 'session_id',
// 			expires: 'expires',
// 			data: 'data'
// 		}
// 	}
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
     //store: sessionStore
  })



app.use(adminBro.options.rootPath, router);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on port: ${PORT}`);
});