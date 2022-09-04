import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Image from "components/Shared/Image";

import {
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "utils/hooks/useStore";
import { getCompany, getCompanyInfo } from "redux/SearchSlice";

type Props = {};

const Index = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const company = useAppSelector(getCompanyInfo);
  const { t } = useTranslation();
  const locationHome = useLocation().pathname !== "/";
  const locationCompany = useLocation().pathname !== "/search-results";

  useEffect(() => {
    dispatch(getCompany(+id));
  }, [company]);

  return (
    <Box sx={{ my: 4 }}>
      <Toolbar>
        <Container maxWidth={"xl"}>
          <Box
            sx={{
              height: {
                xs: "0",
                md: !locationHome || !locationCompany ? "25vh" : "15vh",
              },
            }}
          />

          <Grid container spacing={3} justifyContent="space-between">
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              sx={{
                mx: { xs: "auto", md: "unset" },
                my: !locationHome || !locationCompany ? "0" : 3,
              }}
            >
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image src={company.img} alt="" width="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} md={8.5} lg={9.5}>
              <Typography variant="h2">
                {company.group} {t("group")}
              </Typography>
              <Typography variant="h3" sx={{ display: "flex" }}>
                {t("floorNo")}: {company.floorNo} -- {t("buildNo")}:{" "}
                <Typography variant="h3" sx={{ fontWeight: "500", ml: 1 }}>
                  {company.buildNo}
                </Typography>
              </Typography>
              <Typography variant="h2" sx={{ mt: 2 }}>
                {t("about")}
              </Typography>
              <Typography variant="body1">{company.about}</Typography>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 2 }}
                spacing={2}
              >
                <Grid item xs={12} md={5.5}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() =>
                      navigate(`/company/${id}/reservation`, { replace: true })
                    }
                  >
                    <Typography> {t("visit")}</Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} md={5.5}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: "main.white",
                      color: "main.white",
                      boxShadow: "unset",
                    }}
                    onClick={() => navigate("/")}
                  >
                    <Typography> {t("back")}</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </Box>
  );
};

export default Index;
