import React from "react";
import "./App.css";
import FavoriteRest from "./components/FavoriteRest";
import RestList from "./components/RestList";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>맛집 리스트</h1>
      </header>
      <main className="content">
        <FavoriteRest />
        <RestList />
      </main>
    </div>
  );
}

export default App;