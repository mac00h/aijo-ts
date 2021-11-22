import React from "react";
import { Header } from "./components/Header";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import { RegularToRPN } from "./routes/RegularToRPN";
import { RPNToRegular } from "./routes/RPNToRegular";

function App() {
  const location = useLocation();
  return (
    <div className="bg-gradient-radial from-blue-500 to-indigo-900 min-h-screen font-main overflow-x-hidden">
      <Header currentLocation={location.pathname} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/regular-to-rpn" element={<RegularToRPN />} />
          <Route path="/rpn-to-regular" element={<RPNToRegular />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
