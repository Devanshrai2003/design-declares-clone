import { InfoBox } from "../assets/InfoBox";
import { SectionComponent } from "../assets/SectionComponent";
import { infoBoxData } from "../data/infoBoxData";
import "../styles/InformationSection.css";

export function InformationSection() {
  return (
    <SectionComponent heading="8 Acts of Emergency">
      <div className="info-section">
        <p>
          What does it take to Declare? It’s accepting we are in an emergency of
          climate and nature, and a commitment to do something about it. Here
          are eight places to start:
        </p>
      </div>
      <div className="info-list">
        {infoBoxData.map((item, index) => (
          <InfoBox
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </SectionComponent>
  );
}
