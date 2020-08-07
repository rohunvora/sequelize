const usersDB = require('./models');
const db = require('./models');

db.user.create({
  firstName: 'Rohun',
  lastName: 'Vora',
  age: 21,
  email: 'emailrohun@gmail.com'
});
