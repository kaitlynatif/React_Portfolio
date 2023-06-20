// Import necessary React libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// Import Bootstrap and custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";
// Define the App component
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        {/* <Navigation /> */}
        {/* <Header/> */}
        <div className="container mt-5">
          <Routes>
            <Route path="/React_Portfolio/" element={<About />} />
            {/* <Route path="/React_Portfolio/home" element={<Home />} /> */}
            <Route path="/React_Portfolio/about" element={<About />} />
            <Route path="/React_Portfolio/portfolio" element={<Portfolio />} />
            <Route path="/React_Portfolio/contact" element={<Contact />} />
            <Route path="/React_Portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
// Render the Footer component
export default App;

// Please reference the README.md for further insight
// HowToCreateReact.md and Resume.PDF are located in the documentation folder
// Thank you for viewing!
// Kaitlyn Atif 😊