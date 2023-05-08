export const options =  {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 160,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 0,
        },
        repulse: {
          distance: 0,
          duration: 0.5,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 200,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 90,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "square",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };