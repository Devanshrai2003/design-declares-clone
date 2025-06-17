import { useState } from "react";
import { Button } from "../assets/Button";
import { CheckBox } from "../assets/CheckBox";
import { FormInput } from "../assets/FormInput";
import { SectionComponent } from "../assets/SectionComponent";
import "../styles/NewsletterSection.css";

export function NewsletterSection() {
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  return (
    <SectionComponent
      heading="The Design Declares Newsletter and Toolkit"
      footer={<Button text="Subscribe" />}
    >
      <div className="newsletter-form">
        <img
          className="toolkit-image"
          src="src/assets/images/toolkit.webp"
          alt="toolkit image"
        ></img>
        <h3 className="newsletter-text">
          Subscribe to the Design Declares UK newsletter to receive the latest
          news and updates. By signing up you will also gain access to The
          Design Declares Toolkit, a live and evolving Notion site co-created
          with our community. It is filled with the latest resources and methods
          to help you on your journey to climate-positive design.
        </h3>
        <p className="register-text">
          Every signatory to Design Declares will receive an access link to the
          Toolkit. If you are unable to declare emergency quite yet, you can
          still access the Toolkit - just register below.
        </p>
        <span className="email-box">
          <FormInput label="Email:*" type="text" />
        </span>
        <CheckBox
          label="I would like to be added to the Design Declares! newsletter and receive further updates."
          name="newsletterConsent"
          checked={newsletterConsent}
          onChange={setNewsletterConsent}
        />
        <a href="#" className="read-policy">
          View our privacy policy
        </a>
      </div>
    </SectionComponent>
  );
}
