import { Box, Toolbar } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Background from "./Background";

const Index = () => {
  const locationHome = useLocation().pathname !== "/";
  const locationCompany = useLocation().pathname !== "/search-results";

  return (
    <Box sx={{ position: "relative" }}>
      <Header />
      <Background />
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        sx={{ minHeight: !locationHome || !locationCompany ? "47vh" : "77vh" }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
