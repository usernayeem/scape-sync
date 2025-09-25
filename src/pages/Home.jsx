import { useState } from "react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { BuildForEveryone } from "../components/BuildForEveryone";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <BuildForEveryone />
    </div>
  );
}

export default Home;
