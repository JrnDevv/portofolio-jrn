import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Background() {
  const particlesInit = async (engine) => {
    await loadFull(engine); // necessário para animação completa
  };

  return (
    <Particles
      init={particlesInit}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      options={{
        background: { color: "#0a0a0a" },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#efeff0ff" },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 3 }, random: true },
          move: { enable: true, speed: 2, direction: "none", outModes: { default: "bounce" } },
          links: { enable: true, distance: 150, color: "#1e90ff", opacity: 0.5, width: 1 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
          modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
}
