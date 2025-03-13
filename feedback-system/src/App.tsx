import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import HomePage from "./pages/HomePage";
import SummaryPage from "./pages/SummaryPage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
