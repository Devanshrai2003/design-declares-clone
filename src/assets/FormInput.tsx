import { ChevronDownIcon } from "@heroicons/react/24/solid";
import "../styles/FormInput.css";
interface FormInputProps {
  label: string;
  type: "text" | "select";
  options?: string[];
}

export function FormInput({ label, type, options = [] }: FormInputProps) {
  return (
    <div className="input-box">
      <span className="label">{label}</span>
      {type === "select" ? (
        <>
          <select className="input">
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="select-icon" />
        </>
      ) : (
        <input className="input" type="text" />
      )}
    </div>
  );
}

export function FormInputFooter({ label }: { label: string }) {
  return (
    <div className="footer-input-box">
      <span className="footer-input-label">{label}</span>
      <input className="footer-input" type="text" />
    </div>
  );
}
