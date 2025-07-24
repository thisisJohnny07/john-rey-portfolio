import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{" "}
          <a href="mailto:johnreycseguma@gmail.com">email</a>. 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${import.meta.env.BASE_URL}socials/${social.icon}`}
                  alt={social.icon.replace(".svg", "")}
                />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
            thisisjohnrey@gmail.com
          </p>
          <p className="email-indent">johnreycseguma@gmail.com</p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +63 926 171 4623
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Isulan Sultan Kudarat Philippines
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;