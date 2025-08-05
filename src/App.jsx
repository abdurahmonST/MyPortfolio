import React from "react";
import { Route, Routes } from "react-router";
import { MainLayout } from "./layout";
import { AboutPage, ContactPage, HomePage, ProjectsPage } from "./pages";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
