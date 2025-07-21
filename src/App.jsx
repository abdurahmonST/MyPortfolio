import { Route, Routes } from "react-router";
import { MainLayout } from "./layout";
import { HomePage } from "./pages";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
