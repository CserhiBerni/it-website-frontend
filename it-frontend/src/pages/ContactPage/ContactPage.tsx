import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import "./ContactPage.css";
import { FaPhoneAlt } from "react-icons/fa";

export const ContactPage = () => {
  return (
    <div>
      <div className="contact-page">
        <section className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </section>
        <section className="contact-info">
          <div className="contact-info-row">
            <FaEnvelope color="#0767d4ff" />
            <p>Email: bernat.gaspar@stud.uni-corvinus.hu</p>
          </div>
          <div className="contact-info-row">
            <FaPhoneAlt color="#d40707ff" />
            <p>Phone: +36302804869</p>
          </div>
          <div className="contact-info-row">
            <FaLocationDot color="#d43e07ff" />
            <p>Location: Budapest, Hungary</p>
          </div>
        </section>
        <p className="contact-text">We usually reply within 24 hours on business days.</p>
      </div>
      <footer>
        <p>&copy; 2025 TravelMe - Made for a web development project.</p>
      </footer>
    </div>
  );
};
