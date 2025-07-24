import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  const { img, name, description, stack = [], source, preview } = props;

  return (
    <div className="project-card">
      <div className="project-img">
        <img src={`${import.meta.env.BASE_URL}${img}`} alt={name} />
      </div>
      <div className="project-title">
        <h2>{name}</h2>
      </div>
      <div className="project-description">
        <p>{description}</p>
      </div>

      <div className="project-stack">
        {stack.length > 0 ? (
          stack.map((tech, index) => (
            <div key={index} className="tech-badge">
              {tech}
            </div>
          ))
        ) : (
          <div>No technologies listed</div>
        )}
      </div>

      <div className="project-links">
        {(source || preview) && (
          <div>
            {source && (
              <a href={source} className="github" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            )}
            {preview && (
              <a href={preview} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string.isRequired,
  source: PropTypes.string,
  preview: PropTypes.string,
};

export default ProjectCard;