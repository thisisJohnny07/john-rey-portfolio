import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Heading from "./Heading";
import socials from "../content/socials";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  return (
    <div className="container">

      <img
        src={`${import.meta.env.BASE_URL}${props.img}`}
        alt="Profile"
        className="profile-image"
      />

      <Heading firstWord="Who" secondWord="AmI?" />

      <div className="hero-typewriter">
        <h3>I am</h3>
        <Typewriter
          options={{
            strings: ["An Aspiring Software Developer"],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
      </div>

      <div className="button-effect">
        <div className="hero-text">
          <p className="hero-desc">{props.description}</p>
        </div>

        <br />
        <br />
        Find me on:
        <div className="hero-socials">
          {socials.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <img
                src={`${import.meta.env.BASE_URL}socials/${social.icon}`}
                alt={social.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Hero;