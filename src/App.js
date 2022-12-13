import "./components/properties/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/contents/Main";
import Cv from "./components/contents/Cv";
import Project from "./components/contents/Project";
import Contact from "./components/contents/Contact";
import More from "./components/contents/More";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
