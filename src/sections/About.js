import "./about.css";
import TeamMember from "../components/TeamMember";
import members from "../assets/data/members.json";
import team from "../assets/img/team.png";

const About = () => {
  return (
    <section id="about">
      <div className="about-text">
        <h5>ABOUT</h5>
        <p>
          S29.designis here to cover all your creative needs. We offer a wide
          range of services, including <span className=""></span>
          <span className="lcd">
            <span className="color1">game design, </span>
            <span className="color2">web design, </span>
            <span className="color3">brand design, </span>
            <span className="color4">arch-viz, </span>
          </span>{" "}
          and <span className="lcd color5">architecture</span>. With our diverse
          skill set, we're well-equipped to handle projects that cut across
          various industries.
        </p>
      </div>

      <div className="team">
        <h5>TEAM</h5>
        <div className="team-grid">
          {members.map((e, i) => {
            return <TeamMember member={e} />;
          })}
        </div>
      </div>
      <img className="team-pic" src={team} alt="team-pic" />
      <div className="about-text">
        <h5>OUR DESIGN PHLOSOPHY</h5>
        <p>
          S29.designis here to cover all your creative needs. We offer a wide
          range of services, including <span className=""></span>
          <span className="lcd">
            <span className="color1">game design, </span>
            <span className="color2">web design, </span>
            <span className="color3">brand design, </span>
            <span className="color4">arch-viz, </span>
          </span>{" "}
          and <span className="lcd color5">architecture</span>. With our diverse
          skill set, we're well-equipped to handle projects that cut across
          various industries.
        </p>
      </div>
    </section>
  );
};
export default About;
