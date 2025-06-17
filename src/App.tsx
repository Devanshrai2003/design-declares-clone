import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import "./styles/App.css";
import { MainLayout } from "./layouts/MainLayout";
import { FloatingMenu } from "./components/FloatingMenu";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <FloatingMenu />
      </MainLayout>
    </>
  );
}

export default App;
