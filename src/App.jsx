import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClansPage from "./components/pages/clansPage";
import PlayersPage from "./components/pages/playersPage";
import TopClans from "./components/pages/topClans";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ClansPage />} />
          <Route path="/clan" element={<ClansPage />} />
          <Route path="/player" element={<PlayersPage />} />
          <Route path="/topclans" element={<TopClans />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
