import { useState } from "react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { BuildForEveryone } from "../components/BuildForEveryone";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <BuildForEveryone />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
