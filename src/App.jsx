import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="sw-api/" element={<MovieList />} />
          <Route path="sw-api/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
