import {
  Box,
  Container,
  Paper,
  Toolbar,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "utils/hooks/useStore";
import { useTranslation } from "react-i18next";
import { getPageNumber, getSearchResult } from "redux/SearchSlice";

const SearchForm = () => {
  const { t } = useTranslation();
  const location = useLocation().pathname === "/search-results";
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const pageNumber = useAppSelector(getPageNumber);

  useEffect(() => {
    if (pageNumber >= 1) {
      dispatch(getSearchResult({ ...searchValue, pageNumber }));
    }
  }, [pageNumber]);

  const [searchValue, setSearchValue] = useState({
    buildNo: "",
    floorNo: "",
    companyName: "",
    groupName: "",
  });

  const responsiveGrid = {
    lg: location ? 12 : 3,
    sm: location ? 12 : 6,
    xs: 12,
  };

  const handleSubmit = (e) => {
    dispatch(getSearchResult({ ...searchValue, pageNumber }));
    navigate("/search-results");

    e.preventDefault();
  };
  return (
    <Toolbar
      variant="dense"
      sx={{
        mb: 3,
        transform: "translateY(35px)",
        px: location ? "0 !important" : 3,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          m: location ? 0 : { xs: 0, md: 2 },
          px: location ? "0 !important" : { xs: 0, md: 3 },
        }}
      >
        <Paper elevation={1} sx={{ p: { xs: 1, md: 3 } }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2} flexWrap="wrap">
              <Grid item xs={12} sm={responsiveGrid.sm} lg={responsiveGrid.lg}>
                <TextField
                  label={t("companyName")}
                  id="margin-dense"
                  margin="dense"
                  fullWidth
                  type="text"
                  sx={{ "& .MuiOutlinedInput-input": { color: "body.main" } }}
                  value={searchValue.companyName}
                  onChange={(e) =>
                    setSearchValue({
                      ...searchValue,
                      companyName: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={responsiveGrid.sm} lg={responsiveGrid.lg}>
                <TextField
                  label={t("group Name")}
                  id="margin-dense"
                  margin="dense"
                  fullWidth
                  type="text"
                  sx={{ "& .MuiOutlinedInput-input": { color: "body.main" } }}
                  value={searchValue.groupName}
                  onChange={(e) =>
                    setSearchValue({
                      ...searchValue,
                      groupName: e.target.value,
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} sm={responsiveGrid.sm} lg={responsiveGrid.lg}>
                <TextField
                  label={t("buildNo")}
                  id="margin-dense"
                  margin="dense"
                  fullWidth
                  type="text"
                  sx={{ "& .MuiOutlinedInput-input": { color: "body.main" } }}
                  value={searchValue.buildNo}
                  onChange={(e) =>
                    setSearchValue({ ...searchValue, buildNo: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={responsiveGrid.sm} lg={responsiveGrid.lg}>
                <TextField
                  label={t("floorNo")}
                  id="margin-dense"
                  fullWidth
                  margin="dense"
                  type="text"
                  sx={{ "& .MuiOutlinedInput-input": { color: "body.main" } }}
                  value={searchValue.floorNo}
                  onChange={(e) =>
                    setSearchValue({ ...searchValue, floorNo: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mt: 3 }}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{ py: "12px" }}
              >
                <SearchOutlinedIcon />
                <Typography variant="button" sx={{ ml: 1 }}>
                  {t("search")}
                </Typography>
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Toolbar>
  );
};

export default SearchForm;
