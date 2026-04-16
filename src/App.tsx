/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import HorizontalGallery from "./components/HorizontalGallery";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <HorizontalGallery />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <main className="relative">
        <Intro />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </Router>
  );
}
