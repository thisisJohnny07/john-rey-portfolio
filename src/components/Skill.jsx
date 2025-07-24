import PropTypes from "prop-types";

const Skill = (props) => {
  return (
    <div className="skill">
      <img
        src={`${import.meta.env.BASE_URL}skills/${props.skill}`}
        alt={props.skill}
        className="skill-img"
      />
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default Skill;
