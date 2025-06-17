import type { ReactNode } from "react";
import { Footer } from "../components/Footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
}
