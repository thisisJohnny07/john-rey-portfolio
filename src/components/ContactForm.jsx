import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactFooter = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-col contact-left">
          <h2>Let's talk about everything!</h2>
          <p>
            Send me an{" "}
            <a href="mailto:johnreycseguma@gmail.com">email</a>. 👋
          </p>
        </div>

        {/* Middle Column */}
        <div className="contact-col contact-middle">
          <p className="contact-links">
            <MdEmail className="icon" />
            thisisjohnrey@gmail.com
          </p>
          <p className="contact-links email-indent">johnreycseguma@gmail.com</p>
          <p className="contact-links">
            <FaPhoneAlt className="icon" />
            +63 926 171 4623
          </p>
          <p className="contact-links">
            <IoLocation className="icon" />
            Isulan Sultan Kudarat Philippines
          </p>
        </div>

        {/* Right Column */}
        <div className="contact-col contact-right">
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon.replace(".svg", "")}
              >
                <img
                  src={`${import.meta.env.BASE_URL}socials/${social.icon}`}
                  alt={social.icon.replace(".svg", "")}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;