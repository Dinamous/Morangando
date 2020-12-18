const bcrypt = require('bcrypt');
const { User } = require('../models');
const redis = require('redis');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);

// let redisClient = redis.createClient();
// const sessionStorage = {
//   store: new RedisStore({
//     client: redisClient
//   }),
//   secret: 'this is secret',
//   resave: false,
//   saveUninitialized:false
// };

// redisClient.on("error", function (err) {
//     console.log("Error " + err);
// });

async function authenticate(email, password) {
  const userRecord = await User.findOne({
    where: { email }
  });
  if (userRecord) {
    const matched = await bcrypt.compare(password, userRecord.encryptedPassword);
    if (matched) {
        // console.log("achouuuuuuuuuu")
      return true;
    }
  }
//   console.log("nadaaaaaaa")
  return false;
}
module.exports = {
authenticate,
// sessionStorage,
};