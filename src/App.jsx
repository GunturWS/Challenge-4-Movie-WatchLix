import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DetailMovie from "./pages/DetailMovie";
// import Main from "./components/Main";
// import Popular from "./components/Popular";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:movieId" element={<DetailMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
