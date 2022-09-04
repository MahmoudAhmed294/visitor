import {
  AppBar,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "utils/hooks/useStore";
import { getLanguage, toggleLanguage } from "redux/languageSlice";
import { ClientStorage } from "utils/clientStorage";
import { Link } from "react-router-dom";


const Header = () => {
  const { t } = useTranslation();

  const language = useAppSelector(getLanguage);
  const dispatch = useAppDispatch();

  const changeLanguage = () => {
    switch (language) {
      case "en":
        dispatch(toggleLanguage("ar"));
        ClientStorage.set("language", "ar");
        break;
      case "ar":
        dispatch(toggleLanguage("en"));
        ClientStorage.set("language", "en");

        break;
    }
  };

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "transparent", boxShadow: "0", zIndex: "10000" }}
    >
      <Toolbar variant="dense">
        <Container maxWidth="xl">
          <Grid
            container
            justifyContent={"space-between"}
            alignItems="center"
            py="28px"
          >
            <Typography variant="h2">
              <Link to={"/"} style={{ color: "#FFF", textDecoration: "none" }}>
                LOGO
              </Link>
            </Typography>
            <Typography variant="h3">19203</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "body.light",
                "&:hover": {
                  backgroundColor: "#fff !important",
                  color: "body.light",
                },
              }}
              onClick={changeLanguage}
            >
              {t("العربيه")}
            </Button>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
