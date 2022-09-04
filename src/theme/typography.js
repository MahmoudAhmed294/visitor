// ----------------------------------------------------------------------

function pxToRem(value) {
    return `${value / 18}rem`;
  }
  
  function responsiveFontSizes({ sm, md, lg }) {
    return {
      "@media (min-width:600px)": {
        fontSize: pxToRem(sm),
      },
      "@media (min-width:900px)": {
        fontSize: pxToRem(md),
      },
      "@media (min-width:1200px)": {
        fontSize: pxToRem(lg),
      },
    };
  }
  
  const FONT_PRIMARY = "Roboto Regular , sans-serif";
  const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    
    h1: {
      fontWeight: 700,
      lineHeight: 80 / 64,
      fontSize: pxToRem(35),
      ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
      fontWeight: 700,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
      ...responsiveFontSizes({ sm: 22, md: 28, lg: 32 }),
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(26),
      ...responsiveFontSizes({ sm: 20, md: 24, lg: 26 }),
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
      ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(18),
      ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    },
    h6: {
      fontWeight: 400,
      lineHeight: 28 / 18,
      fontSize: pxToRem(14),
      ...responsiveFontSizes({ sm: 15, md: 18, lg: 18, xs: 10 }),
    },
    subtitle1: {
      lineHeight: 1.5,
      fontSize: pxToRem(16),
      fontWeight: 400,
    },
    subtitle2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
      fontWeight: "normal",
    },
    body1: {
      lineHeight: 1.8,
      fontSize: pxToRem(18),
    },
    body2: {
      fontSize: pxToRem(26),
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(12),
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      letterSpacing: 1.1,
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 700,
      lineHeight: 24 / 14,
      fontSize: pxToRem(20),
      textTransform: "capitalize",
      textDecoration: "none"

    },
  };
  
  export default typography;
  