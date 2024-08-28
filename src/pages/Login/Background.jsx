import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "#fff",
      //   },
      // },
      fpsLimit: 150,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "slow",
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          slow: {
            distance: 50,
          },
        },
      },
      particles: {
        color: {
          value: "#00f",
        },
        links: {
          color: "#00f",
          distance: 150,
          enable: true,
          opacity: 0.8,
          width: 1,
        },
        move: {
          direction: "none",
          drift: 0,
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 15,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
      zLayers: 1,
      style: {},
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }
};

export default Background;
