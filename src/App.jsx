import React from "react";
import Navbar from "./components/ui/Navbar";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Skills from "./components/ui/Skills";
import Qualification from "./components/ui/Qualification";
import Projects from "./components/ui/Projects";
import ContactMe from "./components/ui/ContactMe";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <div
      className={` min-h-screen flex flex-col    items-center dark:bg-background-dark bg-background   `}
    >
      <div className="max-w-[1000px] w-full ">
        <Navbar />
        <Home />

        <About />
        <Skills />
        <Qualification />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}
