import { Box, Grid, Link, Typography } from "@mui/material";
import Carousel from "components/Shared/Carousel";
import { useLocation } from "react-router-dom";
import {
  FacebookOutlined,
  LinkedIn,
  Twitter,
  YouTube,
  Instagram,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const location = useLocation().pathname !== "/";
  const locationCompany = useLocation().pathname !== "/search-results";
  const { t } = useTranslation();

  
  return (
    <Box>
      {
        (!location || !locationCompany) ? (

          <Carousel />
          ):""
      }
      {location && (
        <Grid
          container
          alignItems="center"
          sx={{
            py: 2,
            px: {xs:1 ,sm:5},
            mt:  (!location || !locationCompany) ? 5 :0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.47), rgba(128,128,128,0))",
              justifyContent:{xs:"center" , sm:"space-between"},
              flexDirection: {xs:"column", sm:"row"},
          }}
        >
          <Typography variant="caption" >{ t('Copyright © 2022 Waterway')}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py:{xs:1 , sm:0}
            }}
          >
            <Link href="#" underline="none" sx={{ mx: 0.5 }}>
              <FacebookOutlined
                fontSize={"medium"}
                sx={{ color: "main.white" }}
              />
            </Link>
            <Link href="#" underline="none" sx={{ mx: 0.5 }}>
              <LinkedIn fontSize={"medium"} sx={{ color: "main.white" }} />
            </Link>
            <Link href="#" underline="none" sx={{ mx: 0.5 }}>
              <Twitter fontSize={"medium"} sx={{ color: "main.white" }} />
            </Link>
            <Link href="#" underline="none" sx={{ mx: 0.5 }}>
              <YouTube fontSize={"medium"} sx={{ color: "main.white" }} />
            </Link>

            <Link href="#" underline="none" sx={{ mx: 0.5 }}>
              <Instagram fontSize={"medium"} sx={{ color: "main.white" }} />
            </Link>
          </Box>
          <Typography variant="caption" >{ t('Created with love by ITD')}</Typography>

        </Grid>
      )}
    </Box>
  );
};

export default Footer;
