
// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const main = {
  white: "#FFFFFF",
  lightGray: "#B7B7B7",
  darkGray: "#989898",
  lightBlack: "#333333",
  bg: "#1B1B1B",
  black: "#000000",
};

const PRIMARY = {
  main: "#2D66B4",
};

const SECONDARY = {
  main: "#989898",
};
const BODY = {
  main: "#1B1B1B",
  light: "#333333",
};



const ERROR = {
  main: "#FF4842",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  secondary: createGradient( SECONDARY.main),
  body: createGradient(BODY.light, BODY.main , BODY.bg),
  error: createGradient(ERROR.light, ERROR.main),
  main: createGradient( main.bg , main.black , main.white , main.lightBlack , main.lightGray , main.darkGray),
};



const palette = {
  direction: "ltr",
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  body: { ...BODY },
  error: { ...ERROR },
  main: { ...main },
  gradients: GRADIENTS,
  background: { default: main.bg, },
  text: {primary: main.white  },


};

export default palette;
