import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "../styles/RadioButton.css";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export function RadioButton({
  label,
  name,
  value,
  checked,
  onChange,
}: RadioButtonProps) {
  return (
    <label className="radio-button">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className="radio-box">
        <AnimatePresence>
          {checked && (
            <motion.span
              key="cross"
              className="cross"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <XMarkIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span className="radio-label">{label}</span>
    </label>
  );
}
