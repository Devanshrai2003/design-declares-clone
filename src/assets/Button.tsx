import "../styles/Button.css";

export function Button({ text }: { text: string }) {
  return <button className="general-button">{text}</button>;
}

export function FooterButton({ text }: { text: string }) {
  return <button className="footer-button">{text}</button>;
}
