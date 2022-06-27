'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      { email: 'david@chung.com', username: 'Dchung007', hashedPassword: bcrypt.hashSync('davidchung') },
      { email: 'demo@user.io', username: 'Demo-lition', hashedPassword: bcrypt.hashSync('password') },
      { email: 'eddie@lau.com', username: 'LiveLaughLau', hashedPassword: bcrypt.hashSync('eddielau') },
      { email: 'lynn@luong.com', username: 'LynnLuong', hashedPassword: bcrypt.hashSync('lynnluong') },
      { email: 'steph@curry.nba', username: 'ChefCurry30', hashedPassword: bcrypt.hashSync('stephencurry') },
      { email: 'michael@jordan.nba', username: 'Goat23', hashedPassword: bcrypt.hashSync('michaeljordan') },
      { email: 'kobe@bryant.nba', username: 'BlackMamba24', hashedPassword: bcrypt.hashSync('kobebryant') },
      { email: 'luka@doncic.nba', username: 'LukaMagic77', hashedPassword: bcrypt.hashSync('lukadoncic') },
      { email: 'giannis@antetokounmpo.nba', username: 'GreekFreak34', hashedPassword: bcrypt.hashSync('giannisantetokounmpo') },
      { email: 'lebron@james.nba', username: 'KingJames23', hashedPassword: bcrypt.hashSync('password3') },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    // const Op = Sequelize.Op;
    // return queryInterface.bulkDelete('Users', {
    //   username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    // }, {});
    return queryInterface.bulkDelete('Users', null, {});
  }
};
