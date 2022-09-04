import PropTypes from "prop-types";
import React, {  useMemo} from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
//
import rtlPlugin from "stylis-plugin-rtl";

// import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import palette from "./palette";
import typography from "./typography";
import { button } from "./button";
import {  useAppSelector } from "utils/hooks/useStore";
import {getDir  } from "redux/languageSlice"

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const dir = useAppSelector(getDir);

  
  
  let theme = useMemo(() => {
    return createTheme({
      direction: dir,
      palette,
      typography,
      shape: { borderRadius: 4 },
      components: { ...button },
    });
  }, [dir]);

  const cacheRtl = useMemo(() => {
    if (dir === "rtl") {
      return createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
      });
    } else {
      return createCache({ key: "css" });
    }
  }, [dir]);


  theme = responsiveFontSizes(theme);
  return (
    <CacheProvider
      value={cacheRtl}
    >
      <MUIThemeProvider theme={theme} injectFirst>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </CacheProvider>
  );
}
