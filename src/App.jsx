import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DetailMovie from "./pages/DetailMovie";
import TrailerMovie from "./components/TrailerMovie";
import Footer from "./components/Fotter";
import SeePopular from "./components/SeePopular";
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
          <Route path="/see-populars" element={<SeePopular />} />
          <Route path="/trailers/:movieId" element={<TrailerMovie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
