import { Route, Routes } from "react-router";
import { MainLayout } from "./layout";
import { AboutPage, ContactPage, HomePage, ProjectsPage } from "./pages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: true, // faqat bir marta animatsiya bo'lsin
    });
  }, []);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
