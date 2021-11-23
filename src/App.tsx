import React from "react";
import { Header } from "./components/Header";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import { TransformationComponent } from "./components/TransformationComponent";

function App() {
  const location = useLocation();
  return (
    <div className="bg-gradient-radial from-blue-500 to-indigo-900 min-h-screen font-main overflow-x-hidden">
      <Header currentLocation={location.pathname} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/regular-to-rpn" element={<TransformationComponent transformType='regular'/>} />
          <Route path="/rpn-to-regular" element={<TransformationComponent transformType='rpn'/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
