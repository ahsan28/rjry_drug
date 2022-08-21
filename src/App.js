import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import NoPage from './pages/NoPage';
import Introduction from './pages/Introduction';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import Mode from './pages/Mode';
import Activities from './pages/Activities';
import Certifications from './pages/Certifications';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/rjry_drug" element={<Introduction />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/mode" element={<Mode />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
