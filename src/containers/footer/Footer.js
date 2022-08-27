import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <button>Request Early Access</button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <address>
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </address>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>

          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>

          <ul>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>

          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <small>&copy; 2021 GPT-3. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
