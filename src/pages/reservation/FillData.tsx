import { Grid, TextField, Button } from "@mui/material";
import  { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  handleNext: Function;
  handleBack: Function;
};

const FillData = ({ handleNext, handleBack }: Props) => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
  });
  const { t } = useTranslation();

  const handleSaveData = () => {
    console.log(userData);
    handleNext();
  };
  return (
    <>
      <Grid container spacing={2} flexWrap="wrap" sx={{mt:3}}>
        <Grid item xs={12} md={6}>
          <TextField
            label={t("fullName")}
            id="margin-dense"
            margin="dense"
            fullWidth
            type="string"
            sx={{
              "& .MuiInputBase-input": {
                backgroundColor: "main.white",
                borderRadius: "5px",
                color: "main.lightBlack",
              },
            }}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            value={userData.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={t("phone")}
            id="margin-dense"
            fullWidth
            margin="dense"
            type="number"
            sx={{
              "& .MuiInputBase-input": {
                backgroundColor: "main.white",
                borderRadius: "5px",
                color: "main.lightBlack",
              },
            }}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
            value={userData.phone}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ pt: 2 }} spacing={2}>
        <Grid item xs={12} md={6}>
          <Button
            onClick={() => handleSaveData()}
            variant="contained"
            fullWidth
            sx={{ py: "11px" }}
          >
            {t("visit")}
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            color="inherit"
            onClick={() => handleBack()}
            fullWidth
            variant="outlined"
            sx={{ py: "11px" }}
          >
            {t("back")}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FillData;
