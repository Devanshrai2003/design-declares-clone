import { useState } from "react";
import { RadioButton } from "../assets/RadioButton";
import { SectionComponent } from "../assets/SectionComponent";
import { roleOptions } from "../data/emergencyData";
import "../styles/DeclareEmergencySection.css";
import { FormInput } from "../assets/FormInput";
import { CheckBox } from "../assets/CheckBox";
import { Button } from "../assets/Button";

export function DeclareEmergencySection() {
  const [selected, setSelected] = useState("business");
  const [consentData, setConsentData] = useState(false);
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  return (
    <SectionComponent heading="Declare Emergency Now">
      <p className="declare-emergency-text">
        Design Declares is open to individuals and institutions working in
        industrial, digital, graphic, communication and service design. To
        declare here, you must be a company with an office in the UK employing
        at least one full-time designer. We also welcome declarations from
        practising freelance designers who are registered as self-employed in
        the UK, and global supporters from other countries. All declarations
        will be named and published on this site.
      </p>

      <div className="declare-emergency-form">
        <p className="form-heading">I am Declaring Emergency</p>

        <div className="role-select-section">
          {roleOptions.map((option) => (
            <RadioButton
              key={option.value}
              label={option.title}
              name="role"
              value={option.value}
              checked={selected === option.value}
              onChange={setSelected}
            />
          ))}
        </div>

        <div className="form-inputs">
          {(selected === "business" || "team") && (
            <FormInput label="Business Name:*" type="text" />
          )}
          {selected === "team" && <FormInput label="Team Name:*" type="text" />}
          <FormInput label="Website:*" type="text" />
          <FormInput
            label="Country:*"
            type="select"
            options={["United Kingdom", "United States", "India", "Other"]}
          />
          <FormInput
            label="Discipline:*"
            type="select"
            options={[
              "Graphic Design",
              "Product Design",
              "UX/UI",
              "Industrial Design",
              "Service Design",
            ]}
          />
          <FormInput label="Email:*" type="text" />
          <div className="input-box">
            <textarea
              className="input"
              rows={4}
              placeholder="Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares."
            ></textarea>
          </div>
        </div>

        <div className="consent-section">
          <CheckBox
            label="I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the declaration on this site and across our social channels."
            name="consentData"
            checked={consentData}
            onChange={setConsentData}
          />
          <CheckBox
            label="I would like to be added to the Design Declares! newsletter and receive further updates."
            name="newsletterConsent"
            checked={newsletterConsent}
            onChange={setNewsletterConsent}
          />
        </div>
        <a className="privacy-policy" href="#">
          View our Privacy Policy
        </a>
        <Button text="Declare Emergency Now" />
      </div>
    </SectionComponent>
  );
}
