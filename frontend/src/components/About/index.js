import './About.css'

const About = () => {
  return (
    <div className="about-body">
      <div className="about-section">
        <div className="about-text-1">
          <h1>Why Hoopa exists</h1>
          <p>Hoopa's mission is to share and grow the world's knowledge of THE game of basketball.
            As a truly devoted hooper who has loved the game ever since I was a child, I wanted to foster an environment that would welcome any and all fans of the game.
            I want to connect the people who have knowledge of the game to the people who want it, who want to better their understanding of this game we all love.
            One man I have looked up to my entire life, a Mr. Kobe Bean Bryant, was a student of the game during his playing days and even until his incredibly unfortunate passing.
            For everyone that joked how Kobe was the most selfish player ever, he never hesitated to help an opposing player on his game.
            They need only ask, and he shared his extensive knowledge with them, with a smile on his face while he did it.
            Kobe always liked people who wanted to better themselves, but especially those who were willing to put in the work.
            Basketball was Kobe's gift, and I am eternally grateful the world was able to receive it.
            Basketball is meant to be shared- it is, after all, a team sport.
          </p>
        </div>
        <div className="about-img" id="about-img-kobe">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeK-ofPV7Jc6TXodJ5TG04w85ZA-Fc-3U-0u9zyK_9_H55HXGmP85i3dE_jyGo8FmDl4&usqp=CAU" />
        </div>
      </div>

      <div className="about-section">
        <div className="about-img" id="about-img-goat">
          <img src="https://calbizjournal.com/wp-content/uploads/2022/04/jordan-vs-lebron.jpg" />
        </div>
        <div className="about-text-2">
          <h1>Gather around for a debate</h1>
          <p>One of sports biggest joys, but especially in basketball, is debating.
            There is nothing quite like sitting down with friends and just duking it out on who topics like who the GOAT is, where this player is going to go in free agency, who would win in a hypothetical cross-era match up, etc.
            Everyone has their own opinions, and Hoopa allows them voice them online in a respectful environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
