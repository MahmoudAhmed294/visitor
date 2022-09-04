import { Box, Button, Grid, Typography } from "@mui/material";
import  { useState } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useTranslation } from "react-i18next";

type Props = {
  front: boolean;
  handleNext: Function;
  handleBack: Function;
};

const ScanId = ({ front, handleNext, handleBack }: Props) => {
  const { t } = useTranslation();

  const [IdImg, SetIdImg] = useState({
    frontID: "",
    backID: "",
  });
  const [validation, SetValidation] = useState(false);

  const addIdImage = (e: any) => {
    if (front) {
      SetIdImg({
        ...IdImg,
        frontID: e.target.files[0],
      });
      SetValidation(false);
    } else {
      SetIdImg({
        ...IdImg,
        backID: e.target.files[0],
      });
    }
    SetValidation(false);
  };

  const handleSaveData = () => {
    if (IdImg.frontID !== "" && front) {
      handleNext();
      let data = new FormData();
      data.append("file", IdImg.frontID);
    } else if (IdImg.backID !== "" && front === false) {
      handleNext();
      let data = new FormData();
      data.append("file", IdImg.backID);
    } else {
      SetValidation(true);
    }
  };

  const FileUploadStyleBtn = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "160px",
    borderColor: validation ? "error.main" : "main.white",
    color: "main.white",
  };

  return (
    <Box>
      <Typography variant="h3" sx={{ my: 1, fontWeight: "normal" }}>
        {front ?     t('ScanYourID(Front)') :  t('ScanYourID(Back)')}
      </Typography>
      <Grid>
        <Grid item>
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={FileUploadStyleBtn}
          >
            <Box>
              <CloudUploadOutlinedIcon fontSize="large" />
            </Box>
            <Typography variant="h4"> {t("UploadPhoto")}</Typography>
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => addIdImage(e)}
            />
          </Button>
          <Typography variant="caption" sx={{ color: "error.main" }}>
            {" "}
            {validation ? t("validationImage") : ""}
          </Typography>
        </Grid>
      </Grid>

      <>
        <Grid container sx={{ pt: 2 }} spacing={2}>
          <Grid item xs={12} md={6}>
            <Button
              onClick={() => handleSaveData()}
              variant="contained"
              fullWidth
            >
              {t("scan")}
            </Button>
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
    </Box>
  );
};

export default ScanId;
