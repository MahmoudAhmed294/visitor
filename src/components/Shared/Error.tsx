import { Typography, Stack, Button } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "50vh", mt: "129px", color: "error.main" }}
    >
      <Typography variant="h1">{t("Error 404")}</Typography>
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: "50px", mt: 3 }} />

      <Button
        variant="text"
        size="large"
        sx={{ mt: 3 }}
        onClick={() => navigate("/")}
      >
        {t("Back")}
      </Button>
    </Stack>
  );
};

export default Error;
