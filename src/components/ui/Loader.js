import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

const LoaderWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 2001,
  width: "100%",
  color:"main.white",
  "& > * + *": {
    marginTop: theme.spacing(0),
  },
}));

// ==============================|| Loader ||============================== //

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="inherit" />
  </LoaderWrapper>
);

export default Loader;
