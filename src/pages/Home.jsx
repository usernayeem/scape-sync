import { useState } from "react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { BuildForEveryone } from "../components/BuildForEveryone";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <BuildForEveryone />
      <Testimonials />
      <FAQ />
    </div>
  );
}

export default Home;
