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
    return queryInterface.bulkInsert('Answers', [
      { userId: 1, questionId: 1, answer: 'Obviously, this essentially falls between either MJ or Lebron. I\'ve personally been an MJ fan for so long, but the way Lebron has continued to build his resume, if he wins another chip, I may have to lean towards him.' },
      { userId: 2, questionId: 1, answer: 'Tough to say, but I\'m gonna have to go with GOAT James. Considering how much better the general skill level of the average nba player is today, it is remarkable that Lebron was even able to get to as many finals as he did, even if he did not always win.' },
      { userId: 3, questionId: 1, answer: 'I\'m gonna have to go with Jordan. He just had the accolades, a PERFECT 6-0 in the finals, and was considered the best player in the league nearly every year that he played. He just had that killer mentality where he wanted to absoultely destroy you on the court, and leave you completely demoralized.' },
      { userId: 8, questionId: 1, answer: 'I actually think, when his career is all said and done, and we look back on it, that Lebron will be considered the GOAT- he is most likely going to end up the NBA\'s all time leading scorer, 40,000+ points, 10,000+ assists, and 10,000+ rebounds. That is absolutely mind blowing to me. And then, of course, Lebron absolutely blows MJ out in terms of passing- he is right there with Magic in terms of his passing IQ and feel for the game.' },
      { userId: 7, questionId: 1, answer: 'Mike. No question. His attention to detail was ridiculous. His competitive fire, I have never seen another player who wanted to absolutely annihilate you on the court both physically and mentally. He had that killer mentality where you would literally lose hope because you knew he was about drop 50 on you and there was literally nothing you could do to stop him.' },
      { userId: 6, questionId: 2, answer: 'Magic is the best point guard no question. 5 NBA championships, 3 regular season MVPs, 4x assists leader-and, to top it all off, he won Finals MVP and a ring in his ROOKIE YEAR. Absolutely phenomenal, no one comes close for me.' },
      { userId: 2, questionId: 2, answer: 'Magic, for sure, without a doubt in my mind. That man was a true point guard, a true floor general, in the purest sense of the words. Absolutely surgical with his passing ability. and he was 6 foot freaking 9 inches??? Simply unfair.' },
      { userId: 3, questionId: 2, answer: 'Magic right now for me. But he better watch out. Steph is COMING for him. 4 titles in 8 years??? And I would not be surprised if he wins a COUPLE more before it is over. 5,6 championships and the greatest shooter the game has ever seen? Oh yea, that would be my GOAT PG right there.' },
      { userId: 4, questionId: 2, answer: 'Hot take- I choose Steph. 6 foot 3, the ONLY player right now is even getting top 10 NBA all time player consideration. Arguably the most skilled player ever, he has all the accolades, both team and individual, to unseat Magic Johnson.' },
      { userId: 5, questionId: 2, answer: 'I would love to say Steph honestly, but right now I still think you gotta put Magic. 5 titles to Steph\'s 4, 3 MVP\'s to Steph\'s 2, he just has the edge right now. But when his career is over, I firmly believely Steph will be considered the greatest point guard ever, and a top 5 player of all time.' },
      { userId: 1, questionId: 3, answer: 'Stephen Curry, Michael Jordan, Lebron James, Tim Duncan, and Shaquille O\'Neal' },
      { userId: 1, questionId: 3, answer: 'Magic Johnson, Michael Jordan, Larry Bird, Tim Duncan, and Kareem Abdul-Jabbar' },
      { userId: 1, questionId: 3, answer: 'Steph Curry, Kobe Bryant, Lebron James, Giannis Antetokounmpo, and Hakeem Olajuwon' },
      { userId: 1, questionId: 3, answer: 'Magic Johnson, Michael Jordan, Lebron James, Tim Duncan, and Bill Russell' },
      { userId: 1, questionId: 3, answer: 'Steph Curry, Kobe Bryant, Kevin Durant, Lebron James, Giannis Antetokounmpo' },
      { userId: 1, questionId: 4, answer: '2016-2017 Golden State Warriors- that first year when they got KD, they were absolutely unfair. Just unstoppable, I mean you got Steph, Klay, KD, Iggy, and Draymond??? Truly unfair. The best shooting backcourt EVER, the most skilled small forward ever, and one of the best defensive players of all time??? Literally, what can you even do at that point?' },
      { userId: 1, questionId: 4, answer: '1995-1996 Chicago Bulls- even tho the 2016 Warriors broke their all time regular season win record, they never got the job done and had one of the worst choke jobs ever. Those Bulls, on the other hand, got the job done.' },
      { userId: 1, questionId: 4, answer: '1985-1986 Boston Celtics- Larry Bird and Co. were truly unstoppable, with arguably the best frontcourt the league had ever seen- Bird, Kevin McHale (who is severely underrated), and Robert Parish.' },
      { userId: 1, questionId: 4, answer: '1986-1987 Los Angeles Lakers- Magic Johnson at his peak, Kareem still killing people with his hook shot, James Worthy being James, and a multitude of great role players- that team was special.' },
      { userId: 1, questionId: 4, answer: '2000-2001 Los Angeles Lakers- Kobe and Shaq. What more do I need to say. The greatest duo the game of basketball has EVER seen. This team could ANY team from ANY time in NBA history.' },
      { userId: 1, questionId: 5, answer: 'In the words of Max Kellerman: Of everyone on Golden State, open shot with the fate of the universe on the line or the Martians have the death beam pointed at Earth and you better hit it, I want [Andre] IGUODALA. Lmao JK. Of course not. Gimme Kobe BEAN Bryant. The Black Mamba.' },
      { userId: 2, questionId: 5, answer: 'Hot take- I actually want Lebron taking the last shot, and I know thats probably crazy, but he has one of the best clutch shooting percentages ever. For all the hate he gets, he is actually pretty clutch.' },
      { userId: 3, questionId: 5, answer: 'Gimme MICHAEL JEFFREY JORDAN. THE GOAT. All day every day, this man has some of the best signature clutch shots ever.' },
      { userId: 5, questionId: 5, answer: 'I would take Kevin Durant. The most skilled player ever in my eyes, I want Durant with the ball in his hands at the end of ANY game. He can make ANY shot from ANYWHERE on the court.' },
      { userId: 9, questionId: 5, answer: 'Kobe Bean Bryant all day everyday. There is a reason everyone yells "KOBE" when you nail a shot into the trashcan or anywhere. He is the definition of CLUTCH.' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Answers', null, {});
  }
};
