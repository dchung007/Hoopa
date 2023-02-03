'use strict';

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
    return queryInterface.bulkInsert('Questions', [
      { ownerId: 1, title: 'Who is the GOAT?', description: 'You can only consider people who played after the 1970s.',  },
      { ownerId: 3, title: 'Who is the best point guard ever?', description: 'No, you can not include Lebron James as a point guard.', },
      { ownerId: 1, title: 'What is your all time starting five?', description: 'You cannot put players out of position.', },
      { ownerId: 2, title: 'What is the greatest team ever?', description: 'From the 1996 bulls to the 2017 warriors, there are truly a plethora of options to choose from- but you must choose ONE.', },
      { ownerId: 1, title: 'Game on the line, one shot, who would you take?', description: 'Any player from any era is on the table.', },
      { ownerId: 4, title: 'Who is the biggest draft steal ever?', description: 'You can also include undrafted players if you feel like it.', },
      { ownerId: 7, title: 'Who is the most skilled player ever?', description: 'By skill, I do not consider freakish athletic ability or ridiculous body types.', },
      { ownerId: 7, title: 'What is the greatest duo in nba history?', description: "Again, no one before 1975 please. In the words of one JJ Redick: 'They played against plumbers and firemen!'", },
      { ownerId: 1, title: 'Why did Kevin leave the Oklahoma City Thunder?', description: 'Hehe, this should be a good one.', },
      { ownerId: 1, title: 'Who are your top 5 players of all time?', description: 'The perfect mixture of personal and team achievements, who are the best of the best?', },
      { ownerId: 10, title: 'If you could see any two players in nba history play with each other, who would you pick?', description: 'Can take any two players from any era in nba history?', },
      { ownerId: 3, title: 'Which all-time great is the most underrated?', description: 'This is a tough one, curious to see what everyone thinks.', },
      { ownerId: 5, title: 'Which all-great would you pay the most to watch?', description: 'So many options, from the freak athletes to the most skilled.', },
      { ownerId: 3, title: 'Where would you rank Steph Curry all time?', description: 'Fresh off his 4th finals win in only 8 years, Steph is truly solidifying his case as an All-time great.', },
      { ownerId: 6, title: 'Were the 90s really more physical like all old heads mention?', description: 'An ongoing debate with seemingly no end in sight, which side are you on?', },
      { ownerId: 3, title: 'Other than Steph Curry, who is the greatest shooter ever?', description: 'Everyone knows Steph is unidsputedly the best. Anyone who argues this is either lying or stupid. But who comes after?', },
      { ownerId: 7, title: 'Who had the best work ethic of all time?', description: 'Hard work beats talent when talent fails to work hard.', },
      { ownerId: 1, title: 'If you had to choose, whose young core in the league would you choose to build around?', description: 'The league continues to gain more and more talent with each passing year- who got next?', },
      { ownerId: 9, title: 'Who is the most dominant player ever?', description: 'Some players are just built different. Who you got?', },
      { ownerId: 10, title: 'What are the top 5 greatest dynasties ever?', description: 'Many teams often get to the mountaintop of winning a chip. But it takes a special team to get there consistently.', },
      { ownerId: 8, title: 'Who is the biggest draft bust in NBA history?', description: 'Man oh man there are some sad stories here. Some people should never be drafted.', },
      { ownerId: 7, title: 'Who are the biggest what ifs ever?', description: 'Anyone with crazy potential whose career got derailed for whatever reason (injuries, etc)', },
      { ownerId: 1, title: 'If you were GM of a franchise and you had to start over, who would you pick?', description: 'With the league continually producing more and more exciting young players, this one should be fun.', },
      { ownerId: 5, title: 'Who is the greatest player to have never won a ring?', description: 'Sometimes, a player can accomplish almost everything imaginable in the league- all star, MVP, all nba, the list goes on- but they can never quite seem to get over the hump.', },
      { ownerId: 7, title: 'Who is the laziest player in the league today?', description: 'Some players just do not care. It is truly sad to see someone not work on their craft.', },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
