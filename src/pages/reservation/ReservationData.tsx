import { Box, Button, Grid, Typography } from "@mui/material";
import  { useRef } from "react";
import ReactToPrint from "react-to-print";
import QRCode from "react-qr-code";
import { useTranslation } from "react-i18next";
import { getCompanyInfo } from "redux/SearchSlice";
import { useAppSelector } from "utils/hooks/useStore";

type Props = {
  handleBack: Function;
};

const ReservationData = ({ handleBack }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const company = useAppSelector(getCompanyInfo);

  const { t } = useTranslation();

  return (
    <>
      <Grid
        spacing={3}
        container
        justifyContent="space-between"
        sx={{ mt: 0, pt: 0 }}
        ref={componentRef}
      >
        <Grid
          item
          xs={5}
          md={3}
          lg={2}
          sx={{ mx: { xs: "auto", md: "unset" } }}
        >
          <Box
            sx={{
              mt: { xs: 1, md: 0 },
              display: { xs: "flex", md: "block" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "192px",
                height: "192px",
                padding: "7px",
                backgroundColor: "main.white",
              }}
            >
              <QRCode
                value={`company:${company.name}
                 Build No :${company.buildNo}
                  floor No: ${company.floorNo} 
                   group No: ${company.group}`}
                size={177}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          flexWrap="wrap"
          justifyContent="space-between"
          sx={{ my: 0 }}
          xs={12}
          md={8.5}
          lg={9.5}
        >
          <Grid item sx={{ height: "max-content" }}>
            <Typography variant="h5">{t("buildNo")}</Typography>
            <Typography variant="body1">{company.buildNo}</Typography>
          </Grid>
          <Grid item sx={{ height: "max-content" }}>
            <Typography variant="h5">{t("floorNo")}</Typography>
            <Typography variant="body1">{company.floorNo}</Typography>
          </Grid>
          <Grid item sx={{ height: "max-content" }}>
            <Typography variant="h5">{t("VisitingTime")}</Typography>
            <Typography variant="body1">02:30 pm</Typography>
          </Grid>
          <Grid item sx={{ height: "max-content" }}>
            <Typography variant="h5">{t("companyName")}</Typography>
            <Typography variant="body1">{company.name}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ ml: { xs: "unset", md: "auto" }, mt: { xs: 2, md: 0 } }}
        spacing={2}
        flexWrap="wrap"
        xs={12}
        md={8.5}
        lg={9.5}
      >
        <Grid item xs={12} md={6} sx={{ pt: 0 }}>
          <ReactToPrint
            trigger={() => (
              <Button variant="contained" fullWidth>
                {t("Print")}
              </Button>
            )}
            content={() => componentRef.current}
            copyStyles
            bodyClass="print"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            color="inherit"
            onClick={() => handleBack()}
            fullWidth
            variant="outlined"
          >
            {t("back")}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ReservationData;
