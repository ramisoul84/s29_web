import "./teammember.css";

function TeamMember({ member }) {
  return (
    <div className="team-member">
      <div className="team-info">
        {member.img ? (
          <img
            className="team-img"
            src={require("../assets/img/" + member.img + ".png")}
            alt={member.img + "pic"}
          />
        ) : (
          <></>
        )}

        <ul className="skills" style={{ color: member.color }}>
          {member.skills.map((e, i) => {
            return <p>#{e}</p>;
          })}
        </ul>
      </div>
      <p style={{ color: member.color }}># {member.name}</p>
      <p className="team-text">{member.text}</p>
    </div>
  );
}

export default TeamMember;
