import { Button } from "../assets/Button";
import { SectionComponent } from "../assets/SectionComponent";
import "../styles/DonateSection.css";
export function DonateSection() {
  return (
    <SectionComponent heading="Donate to D!" footer={<DonateButtons />}>
      <p className="donate-text">
        Design Declares is a CIC and would not exist without our dedicated team
        of co-steers, volunteers, and our passionate community working towards
        change in the creative industry. Your support can go a long way, and
        helps us too continue the valuable work needed in tackling the climate
        crises. If you believe in the work we do, please consider a small
        donation to help us on our journey for a more equitable and just planet.
      </p>
    </SectionComponent>
  );
}

function DonateButtons() {
  return (
    <>
      <Button text="Donate £10" />
      <Button text="Donate £20" />
      <Button text="Donate £50" />
    </>
  );
}
