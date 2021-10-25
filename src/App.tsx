import React from "react";
import "./App.css";
import AppContent from "./components/AppContent/AppContent";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContent />
    </div>
  );
}

export default App;
