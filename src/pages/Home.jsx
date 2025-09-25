import { useState } from "react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { BuildForEveryone } from "../components/BuildForEveryone";
import { Testimonials } from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <BuildForEveryone />
      <Testimonials />
    </div>
  );
}

export default Home;
