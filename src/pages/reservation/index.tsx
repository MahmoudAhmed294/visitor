import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Container, Grid, Toolbar } from "@mui/material";
import Stepper from "./Stepper";
import ScanID from "./ScanID";
import FillData from "./FillData";
import ReservationData from "./ReservationData";
import Image from "components/Shared/Image";
import { t } from "i18next";
import { getCompanyInfo } from "redux/SearchSlice";
import { useAppSelector } from "utils/hooks/useStore";

type Props = {};

const Index = (props: Props) => {
  const steps: string[] = [
    t("ScanID(front)"),
    t("ScanID(back)"),
    t("FillData"),
    t("QRCode"),
  ];
  const company = useAppSelector(getCompanyInfo);

  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
    if (activeStep === 0) {
      navigate(-1);
    }
    if (activeStep === 1) {
      navigate("/");
    }
  };

  const navigate = useNavigate();
  const locationHome = useLocation().pathname !== "/";
  const locationCompany = useLocation().pathname !== "/search-results";

  return (
    <Box sx={{ my: 3 }}>
      <Toolbar>
        <Container maxWidth={"xl"}>
          <Box
            sx={{
              height: {
                xs: "23vh",
                md: !locationHome || !locationCompany ? "24vh" : "15vh",
              },
            }}
          />

          <Stepper activeStep={activeStep} steps={steps} />
          <Grid
            container
            spacing={3}
            justifyContent="space-between"
            sx={{ mt: 0 }}
          >
            {activeStep === steps.length - 1 ? (
              ""
            ) : (
              <Grid
                item
                xs={5}
                md={3}
                lg={2}
                sx={{ mx: { xs: "auto", md: "unset" } }}
              >
                <Box
                  sx={{
                    mt: 1,
                    display: { xs: "block", md: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Image src={company.img} alt="" width="100%" />
                </Box>
              </Grid>
            )}
            {activeStep === 0 ? (
              <Grid item xs={12} md={8.5} lg={9.5} sx={{ pt: 0 }}>
                <ScanID
                  front={true}
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              </Grid>
            ) : activeStep === 1 ? (
              <Grid item xs={12} md={8.5} lg={9.5}>
                <ScanID
                  front={false}
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              </Grid>
            ) : activeStep === 2 ? (
              <Grid item xs={12} md={8.5} lg={9.5}>
                <FillData handleNext={handleNext} handleBack={handleBack} />
              </Grid>
            ) : (
              <Grid item xs={12}>
                <ReservationData handleBack={handleBack} />
              </Grid>
            )}
          </Grid>
        </Container>
      </Toolbar>
    </Box>
  );
};

export default Index;
