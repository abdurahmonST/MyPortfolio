import React, { useState } from "react";
import Badge from "./components/Badge";
import NavDrawer from "./components/Drawer";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div style={{ height: "2000px" }}>
      <Badge
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        isActive={isDrawerOpen}
      />
      <NavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default App;
