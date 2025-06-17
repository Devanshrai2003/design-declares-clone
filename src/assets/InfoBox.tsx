interface InfoBoxProps {
  number: string;
  title: string;
  description: string;
}

import "../styles/InfoBox.css";

export function InfoBox({ number, title, description }: InfoBoxProps) {
  return (
    <>
      <div className="content-box">
        <div className="title-box">
          <span>{number}</span>
          <h1>{title}</h1>
        </div>
        <div className="description">{description}</div>
      </div>
    </>
  );
}
