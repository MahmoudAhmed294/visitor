import {
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchForm from "components/Shared/SearchForm";
import Company from "./Company";
import { useTranslation } from "react-i18next";
import { getCompanies, NextPage, PrevPage } from "redux/SearchSlice";
import { useAppSelector, useAppDispatch } from "utils/hooks/useStore";
import { SentimentVeryDissatisfied } from "@mui/icons-material";

type Props = {};

const Index = (props: Props) => {
  const CompanyData = useAppSelector(getCompanies);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  return (
    <Box>
      <Toolbar>
        <Container maxWidth={"xl"}>
          <Grid container justifyContent={"space-between"} spacing={2}>
            <Grid
              item
              xs={12}
              sm={8}
              lg={3.5}
              sx={{ mx: { xs: "auto", lg: "unset" } }}
            >
              <SearchForm />
            </Grid>
            <Grid item xs={12} sm={12} lg={8}>
              <Box sx={{ height: { xs: "0", lg: "25vh" } }} />
              <Box sx={{ mt: 4, px: 2 }}>
                <Typography variant="h3">{t("searchResult")}</Typography>
              </Box>
              <Grid
                container
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
                sx={{ mt: 3 }}
              >
                {CompanyData.length === 0
                  ? CompanyData.length === 0 && (
                      <Typography
                        variant="h3"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        no result for this information{" "}
                        <SentimentVeryDissatisfied
                          sx={{ ml: 2, fontSize: "1.8rem" }}
                        />
                      </Typography>
                    )
                  : CompanyData.map((value, index) => (
                      <Grid
                        item
                        xs={6}
                        sm={3}
                        md={2.5}
                        sx={{ mt: 2 }}
                        key={index}
                      >
                        <Company data={value} />
                      </Grid>
                    ))}
              </Grid>
              <Grid
                container
                xs={12}
                justifyContent="space-between"
                sx={{ mt: 4, px: 2 }}
                alignItems="center"
              >
                <Button
                  variant="contained"
                  sx={{ px: { xs: 3.5, sm: 7.5 } }}
                  onClick={() => dispatch(NextPage())}
                >
                  <Typography>{t("next")}</Typography>
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    px: { xs: 2, sm: 6 },
                    borderColor: "main.white",
                    color: "main.white",
                  }}
                  onClick={() => dispatch(PrevPage())}
                >
                  <Typography>{t("previous")}</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </Box>
  );
};

export default Index;
