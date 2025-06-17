import { useState } from "react";
import "../styles/Footer.css";
import { CheckBox } from "../assets/CheckBox";
import { FormInputFooter } from "../assets/FormInput";
import { FooterButton } from "../assets/Button";

export function Footer() {
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  return (
    <div className="footer-section">
      <div className="footer-top">
        <div className="logo font-bebas">
          <h1>Design</h1>
          <h1>Declares</h1>
        </div>
        <div className="footer-links">
          <a>Contact</a>
          <a>Instagram</a>
          <a>LinkedIn</a>
          <a>Privacy Policy</a>
        </div>
        <div className="newsletter-signup">
          <h3>Sign up to the D! Newsletter</h3>
          <FormInputFooter label="Email:*" />
          <div className="signup-consent">
            <span className="checkbox">
              <CheckBox
                label="I would like to be added to the Design Declares! newsletter and receive further updates."
                name="newsletterConsent"
                checked={newsletterConsent}
                onChange={setNewsletterConsent}
                color="black"
              />
              <a href="#" className="link">
                View our privacy policy
              </a>
            </span>
            <FooterButton text="Subscribe" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-text">
          <p>
            This website has been built following low-carbon principles of web
            development and hosted using serverless computing, by only
            allocating energy when needed and on demand.
            <a className="link"> Learn more about our carbon footprint.</a>
          </p>
          <p>
            Empowered by <a className="link">Driftime®</a>
          </p>
        </div>
      </div>
    </div>
  );
}
