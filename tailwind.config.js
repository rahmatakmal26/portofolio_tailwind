module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      smm: "300px",
      sm: "400px",
      md: "660px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#FFD700",
        accent: "#FFD700",
        customScrollbar: "#FF56F6",
      },
      backgroundImage: {
        site: "url('./assets/bg.avif')",
        about: "url('./assets/tentang.png')",
        services: "url('./assets/layanan.png')",
      },
    },
  },
  plugins: [],
};
