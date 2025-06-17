import { motion, AnimatePresence } from "framer-motion";
import "../styles/CheckBox.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface CheckBoxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  color?: string;
}

export function CheckBox({
  label,
  name,
  checked,
  onChange,
  color = "var(--color-text)",
}: CheckBoxProps) {
  return (
    <div className="checkbox-button" style={{ color }}>
      <div
        className="checkbox-box"
        onClick={() => onChange(!checked)}
        style={{ borderColor: color }}
      >
        <AnimatePresence>
          {checked && (
            <motion.div
              className="checkbox-icon"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ color }}
            >
              <XMarkIcon className="cross" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <span className="checkbox-label">{label}</span>
    </div>
  );
}
