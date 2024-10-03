import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "../src/components/Sidebar";
import { AllPromotions } from "../src/pages/AllPromotions";
import { AddPromotion } from "./pages/AddPromotion";
import { PromotionForm } from "./components/PromotionForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1 ml-64">
                {" "}
                {/* Adjust margin-left */}
                <AllPromotions />
              </div>
            </div>
          }
        />
        <Route
          path="/addPromotion"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1 ml-64">
                {" "}
                {/* Adjust margin-left */}
                <AddPromotion />
              </div>
            </div>
          }
        />
        <Route path="/form" element={<PromotionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
