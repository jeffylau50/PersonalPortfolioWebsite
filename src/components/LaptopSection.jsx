import React from "react";
import LaptopCanvas from "./canvas/Laptop";
import "./laptop-section.css";

function LaptopSection() {
  return (
    <section className="laptop-section" id="laptop">
      <LaptopCanvas />
    </section>
  );
}

export default LaptopSection;
