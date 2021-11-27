import "./about.css";
//import Award from "https://i.ibb.co/Rj3YNwq/IMG-20211106-202016.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/1QxHgVj/My-img-0-4.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted<br> by the
          readable content.
        </p>
        <p className="a-desc">
        I am a Front End developer with industry experience<br> building websites and web applications.<br> I specialize in JavaScript and ReactJS.
        </p>
        <div className="a-award">
          <img src="https://i.ibb.co/Rj3YNwq/IMG-20211106-202016.jpg" alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
