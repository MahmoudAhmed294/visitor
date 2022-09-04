import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Image from "components/Shared/Image";

const small = require("assets/video/bgVideo.mp4");
const bg = require("assets/images/bg.jpg");

type Props = {};

const Background = (props: Props) => {
  const location = useLocation().pathname;
  const locationHome = useLocation().pathname !== "/";
  const locationCompany = useLocation().pathname !== "/search-results";

  return (
    <Box>
      {location !== "/" && location !== "/search-results" ? (
        <Box
          sx={{
            width: "100vw",
            height: (!locationHome || !locationCompany ) ? "47vh" : "40vh",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Image src={bg} width="100%" height="100%" alt="" />
        </Box>
      ) : (
        <video
          height="50%"
          width="100%"
          loop
          autoPlay
          muted
          playsInline
          className="video-background"
          poster={bg}
        >
          <source src={small} type="video/mp4" />
        </video>
      )}
    </Box>
  );
};

export default Background;
